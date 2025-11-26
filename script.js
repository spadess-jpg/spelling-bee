// State
let currentWordIndex = 0;
let currentWord = null;
let shuffledList = [];
let startTime = 0; // For tracking response time
let selectedMode = 'quick'; // Default mode

let stats = {
    total: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    mastered: [], // Array of word strings
    mistakes: [],
    totalTime: 0, // Total time in seconds
    wordsTimed: 0, // Number of words timed
    posStats: {}, // Object to track { noun: {total: 0, correct: 0}, ... }
    wordStats: {}, // { "word": { attempts: 0, correct: 0, totalTime: 0, history: [] } }
    errorPatterns: {} // { "e->a": 5, ... }
};

let settings = {
    darkMode: true,
    mode: 'practice', // practice, test
    showDef: true,
    showPos: true,
    showDia: true,
    showSentence: true,
    showEty: true,
    voiceURI: null,
    autoAudio: true,
    rate: 0.9,
    pitch: 1.0,
    theme: 'dark'
};

// DOM Elements
const homeView = document.getElementById('home-view');
const gameView = document.getElementById('game-view');
const settingsModal = document.getElementById('settings-modal');
const statsModal = document.getElementById('stats-modal');

// Inputs & Buttons
const wordInput = document.getElementById('word-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const playAudioBtn = document.getElementById('play-audio-btn');
const feedbackContainer = document.getElementById('feedback-container');
const correctAnswerContainer = document.getElementById('correct-answer-container');

// Init
function init() {
    if (typeof wordList === 'undefined' || !Array.isArray(wordList)) {
        document.body.innerHTML = '<div style="color: red; padding: 20px; text-align: center;"><h1>Error: Data not loaded</h1><p>Please ensure data.js is in the same directory and contains valid data.</p></div>';
        return;
    }

    loadSettings();
    loadStats();
    updateHomeStats();

    // Initialize shuffled list
    shuffledList = [...wordList].sort(() => Math.random() - 0.5);
    populateVoices();

    setupEventListeners();
}

function setupEventListeners() {
    // Navigation
    document.getElementById('quick-practice-btn').addEventListener('click', () => selectMode('quick'));
    document.getElementById('endless-mode-btn').addEventListener('click', () => selectMode('endless'));

    const weakestBtn = document.getElementById('weakest-links-btn');
    if (weakestBtn) weakestBtn.addEventListener('click', () => selectMode('weakest'));

    const viewStatsBtn = document.getElementById('view-stats-btn');
    if (viewStatsBtn) viewStatsBtn.addEventListener('click', showStats);

    document.getElementById('start-btn').addEventListener('click', () => startSession(selectedMode));

    // Initialize default selection
    selectMode('quick');

    const homeBtn = document.getElementById('home-btn-game');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            switchView('home');
            updateHomeStats();
        });
    }

    const settingsTrigger = document.getElementById('settings-trigger');
    if (settingsTrigger) settingsTrigger.addEventListener('click', () => settingsModal.classList.remove('hidden'));

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.add('hidden');
        });
    });

    // Game Controls
    submitBtn.addEventListener('click', checkWord);
    nextBtn.addEventListener('click', nextWord);
    wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (!submitBtn.classList.contains('hidden')) checkWord();
            else if (!nextBtn.classList.contains('hidden')) nextWord();
        }
    });
    playAudioBtn.addEventListener('click', playAudio);

    // Settings
    setupSettingsListeners();

    // Stats
    const resetStatsBtn = document.getElementById('reset-stats');
    if (resetStatsBtn) resetStatsBtn.addEventListener('click', resetStats);
}

function setupSettingsListeners() {
    // Toggles
    ['showDef', 'showPos', 'showDia', 'showSentence', 'showEty'].forEach(key => {
        const el = document.getElementById(key.replace(/([A-Z])/g, '-$1').toLowerCase());
        if (el) {
            el.addEventListener('change', (e) => {
                settings[key] = e.target.checked;
                saveSettings();
                renderWordInfo();
            });
        }
    });

    const autoAudioToggle = document.getElementById('auto-audio');
    if (autoAudioToggle) {
        autoAudioToggle.addEventListener('change', (e) => {
            settings.autoAudio = e.target.checked;
            saveSettings();
        });
    }

    // Audio Controls
    const voiceSelect = document.getElementById('voice-select');
    if (voiceSelect) {
        voiceSelect.addEventListener('change', (e) => {
            settings.voiceURI = e.target.value;
            saveSettings();
            playAudio();
        });
    }

    const rateRange = document.getElementById('rate-range');
    if (rateRange) {
        rateRange.addEventListener('input', (e) => {
            settings.rate = parseFloat(e.target.value);
            const valDisplay = document.getElementById('rate-value');
            if (valDisplay) valDisplay.textContent = settings.rate;
            saveSettings();
        });
        rateRange.addEventListener('change', () => playAudio());
    }

    const pitchRange = document.getElementById('pitch-range');
    if (pitchRange) {
        pitchRange.addEventListener('input', (e) => {
            settings.pitch = parseFloat(e.target.value);
            const valDisplay = document.getElementById('pitch-value');
            if (valDisplay) valDisplay.textContent = settings.pitch;
            saveSettings();
        });
        pitchRange.addEventListener('change', () => playAudio());
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            settings.theme = e.target.checked ? 'light' : 'dark';
            applyTheme();
            saveSettings();
        });
    }

    // Voice loading
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoices;
    }
}

function applyTheme() {
    if (settings.theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.removeAttribute('data-theme');
    }
}

function selectMode(mode) {
    selectedMode = mode;

    // Update UI
    document.querySelectorAll('.feature-card').forEach(card => card.classList.remove('selected'));

    if (mode === 'quick') document.getElementById('quick-practice-btn').classList.add('selected');
    if (mode === 'endless') document.getElementById('endless-mode-btn').classList.add('selected');
    if (mode === 'weakest') document.getElementById('weakest-links-btn').classList.add('selected');
}

function startSession(mode) {
    if (mode === 'weakest') {
        const weakWords = getSmartWeakestLinks();
        if (weakWords.length === 0) {
            alert("No weakest links found yet! Practice more to generate data.");
            return;
        }
        // Use the smart list directly
        shuffledList = weakWords;
    } else if (mode === 'quick') {
        // Sort by seen count (ascending) then random
        shuffledList = [...wordList].sort((a, b) => {
            const countA = (stats.seenCounts && stats.seenCounts[a.word]) || 0;
            const countB = (stats.seenCounts && stats.seenCounts[b.word]) || 0;
            if (countA === countB) return Math.random() - 0.5;
            return countA - countB;
        }).slice(0, 10);
    } else {
        // Endless
        // Sort by seen count (ascending) then random
        shuffledList = [...wordList].sort((a, b) => {
            const countA = (stats.seenCounts && stats.seenCounts[a.word]) || 0;
            const countB = (stats.seenCounts && stats.seenCounts[b.word]) || 0;
            if (countA === countB) return Math.random() - 0.5;
            return countA - countB;
        });
    }

    currentWordIndex = 0;
    switchView('game');
}

function switchView(view) {
    if (view === 'game') {
        homeView.classList.add('hidden');
        gameView.classList.remove('hidden');
        loadWord();
    } else {
        gameView.classList.add('hidden');
        homeView.classList.remove('hidden');
    }
}

function loadWord() {
    if (currentWordIndex >= shuffledList.length) {
        // Session over
        if (selectedMode === 'endless') {
            // Reshuffle and continue, respecting seen counts
            shuffledList = [...wordList].sort((a, b) => {
                const countA = (stats.seenCounts && stats.seenCounts[a.word]) || 0;
                const countB = (stats.seenCounts && stats.seenCounts[b.word]) || 0;
                if (countA === countB) return Math.random() - 0.5;
                return countA - countB;
            });
            currentWordIndex = 0;
        } else {
            alert("Session Complete!");
            switchView('home');
            return;
        }
    }


    currentWord = shuffledList[currentWordIndex];
    console.log('Loaded word:', currentWord, 'Index:', currentWordIndex, 'List length:', shuffledList.length);

    // Track seen count
    if (!stats.seenCounts) stats.seenCounts = {};
    stats.seenCounts[currentWord.word] = (stats.seenCounts[currentWord.word] || 0) + 1;
    saveStats();

    // Update UI
    document.getElementById('info-pos').textContent = currentWord.part_of_speech || 'Word';
    document.getElementById('info-dia').textContent = settings.showDia ? (currentWord.diacritic || '/.../') : '///';
    document.getElementById('info-def').textContent = settings.showDef ? (currentWord.definition || 'No definition available.') : 'Definition hidden';
    document.getElementById('info-sentence').textContent = settings.showSentence ? (currentWord.example_sentence || 'No example available.') : 'Example hidden';
    document.getElementById('info-etymology').textContent = settings.showEty ? (currentWord.etymology || 'No etymology available.') : 'Etymology hidden';

    // Visibility
    document.getElementById('section-def').style.display = settings.showDef ? 'block' : 'none';
    document.getElementById('section-sentence').style.display = settings.showSentence ? 'block' : 'none';
    document.getElementById('section-ety').style.display = settings.showEty ? 'block' : 'none';
    document.getElementById('info-pos').style.display = settings.showPos ? 'inline-block' : 'none';
    document.getElementById('info-dia').style.display = settings.showDia ? 'inline-block' : 'none';

    wordInput.value = '';
    wordInput.disabled = false;
    wordInput.focus();
    feedbackContainer.innerHTML = '';
    correctAnswerContainer.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');

    if (settings.autoAudio) {
        playAudio();
    }

    startTime = Date.now();
}

function checkWord() {
    const input = wordInput.value.trim();
    if (!input) return;

    const target = currentWord.word;

    // Visual Feedback
    feedbackContainer.innerHTML = '';
    const maxLength = Math.max(input.length, target.length);

    for (let i = 0; i < maxLength; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        const charInput = input[i] || '';
        const charTarget = target[i] || '';

        tile.textContent = charInput;
        if (charInput) tile.classList.add('filled');

        if (charInput.toLowerCase() === charTarget.toLowerCase()) {
            tile.classList.add('correct');
        } else if (target.toLowerCase().includes(charInput.toLowerCase())) {
            tile.classList.add('misplaced');
        } else {
            tile.classList.add('wrong');
        }

        feedbackContainer.appendChild(tile);
    }

    if (input.toLowerCase() === target.toLowerCase()) {
        handleSuccess();
    } else {
        handleFailure();
    }
}

function handleSuccess() {
    let timeTaken = (Date.now() - startTime) / 1000;
    // Sanity check: if time is > 300s (5 mins) or negative, ignore it for stats
    if (startTime === 0 || timeTaken > 300 || timeTaken < 0) {
        timeTaken = 0;
    }

    if (timeTaken > 0) {
        stats.totalTime = (stats.totalTime || 0) + timeTaken;
        stats.wordsTimed = (stats.wordsTimed || 0) + 1;
    }

    stats.total++;
    stats.correct++;
    stats.streak = (stats.streak || 0) + 1;
    if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;

    updatePosStats(true);
    updateWordStats(true, timeTaken);

    // Add to mastered if not already
    if (!stats.mastered) stats.mastered = [];
    if (!stats.mastered.includes(currentWord.word)) {
        stats.mastered.push(currentWord.word);
    }

    saveStats();
    triggerConfetti();

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    wordInput.disabled = true;
    nextBtn.focus();
}

function handleFailure() {
    let timeTaken = (Date.now() - startTime) / 1000;
    // Sanity check
    if (startTime === 0 || timeTaken > 300 || timeTaken < 0) {
        timeTaken = 0;
    }

    if (timeTaken > 0) {
        stats.totalTime = (stats.totalTime || 0) + timeTaken;
        stats.wordsTimed = (stats.wordsTimed || 0) + 1;
    }

    stats.total++;
    stats.streak = 0;

    updatePosStats(false);
    updateWordStats(false, timeTaken);
    analyzeError(wordInput.value.trim().toLowerCase(), currentWord.word.toLowerCase());

    if (!stats.mistakes) stats.mistakes = [];
    // Remove if exists to re-add at top
    stats.mistakes = stats.mistakes.filter(m => m.word !== currentWord.word);
    stats.mistakes.unshift({ word: currentWord.word, date: new Date().toISOString() });
    if (stats.mistakes.length > 50) stats.mistakes.pop();

    saveStats();

    correctAnswerContainer.innerHTML = `Incorrect! The correct spelling is: <strong>${currentWord.word}</strong>`;
    correctAnswerContainer.classList.remove('hidden');

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    wordInput.disabled = true;
    nextBtn.focus();
}

function nextWord() {
    currentWordIndex++;
    loadWord();
}

function playAudio() {
    if (!currentWord) return;

    // Use the word itself for pronunciation
    // Modern TTS engines handle standard English words much better than phonetic approximations
    let textToSpeak = currentWord.word;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    utterance.lang = 'en-US'; // Ensure correct pronunciation rules

    if (settings.voiceURI) {
        const voices = speechSynthesis.getVoices();
        const selectedVoice = voices.find(v => v.voiceURI === settings.voiceURI);
        if (selectedVoice) utterance.voice = selectedVoice;
    }

    console.log(`Speaking: "${textToSpeak}" (Rate: ${settings.rate}, Pitch: ${settings.pitch})`);
    speechSynthesis.speak(utterance);
}

function convertDiacriticToReadable(diacritic) {
    if (!diacritic) return null;

    // Basic mapping of Merriam-Webster diacritics to "sounds-like" English
    // This is an approximation to help the TTS engine
    let d = diacritic.toLowerCase();

    // Remove stress markers for simplicity, or maybe map primary stress to caps?
    // Let's try to just map the sounds first.

    const map = {
        'ə': 'uh',
        'ā': 'ay',
        'ä': 'ah',
        'ē': 'ee',
        'ī': 'eye',
        'ō': 'oh',
        'ü': 'oo',
        'ù': 'u', // as in put
        'yü': 'yoo',
        'au̇': 'ow',
        'ȯ': 'aw',
        'th': 'th', // soft th
        't͟h': 'th', // hard th
        'sh': 'sh',
        'zh': 'zh',
        'ch': 'ch',
        'j': 'j',
        'ŋ': 'ng',
        'y': 'y',
        'w': 'w',
        'h': 'h',
        // Vowels followed by r
        'ər': 'er',
        'är': 'ar',
        'ir': 'ear',
        'ȯr': 'or',
        'ur': 'ur'
    };

    // Replace multi-char sequences first
    d = d.replace(/yü/g, 'yoo');
    d = d.replace(/au̇/g, 'ow');
    d = d.replace(/t͟h/g, 'th');

    // Replace single chars
    Object.keys(map).forEach(key => {
        if (key.length === 1) {
            d = d.split(key).join(map[key]);
        }
    });

    // Clean up
    d = d.replace(/ˈ/g, ''); // Remove primary stress
    d = d.replace(/ˌ/g, ''); // Remove secondary stress
    d = d.replace(/-/g, ' '); // Replace hyphens with spaces for pausing
    d = d.replace(/\(|\)/g, ''); // Remove parens

    return d;
}

function populateVoices() {
    const voices = speechSynthesis.getVoices();
    const select = document.getElementById('voice-select');
    if (!select) return;

    // Filter for English voices only
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));

    // Sort by quality/reliability
    // Priority: Google > Microsoft > Apple > Others
    englishVoices.sort((a, b) => {
        const getScore = (v) => {
            if (v.name.includes('Google')) return 3;
            if (v.name.includes('Microsoft')) return 2;
            if (v.name.includes('Samantha') || v.name.includes('Daniel')) return 2; // Good Apple voices
            return 1;
        };
        return getScore(b) - getScore(a);
    });

    select.innerHTML = '';

    if (englishVoices.length === 0) {
        const option = document.createElement('option');
        option.textContent = "No English voices found";
        select.appendChild(option);
        return;
    }

    englishVoices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})`;
        select.appendChild(option);
    });

    // Auto-select the best voice if none selected or current selection is invalid
    if (!settings.voiceURI || !englishVoices.find(v => v.voiceURI === settings.voiceURI)) {
        // Default to the first one (highest score)
        if (englishVoices.length > 0) {
            settings.voiceURI = englishVoices[0].voiceURI;
            select.value = englishVoices[0].voiceURI;
            saveSettings();
        }
    } else {
        select.value = settings.voiceURI;
    }
}

// Stats Logic
function loadStats() {
    const saved = localStorage.getItem('spellingStats');
    if (saved) {
        stats = JSON.parse(saved);
        // Ensure new fields exist
        if (!stats.wordStats) stats.wordStats = {};
        if (!stats.errorPatterns) stats.errorPatterns = {};

        // Fix for corrupted average speed (extremely high values)
        if (stats.wordsTimed > 0) {
            const avg = stats.totalTime / stats.wordsTimed;
            if (avg > 300 || avg < 0) { // If avg > 5 mins, it's likely a bug
                console.warn('Resetting corrupted time stats');
                stats.totalTime = 0;
                stats.wordsTimed = 0;
            }
        }
    }
}

function saveStats() {
    localStorage.setItem('spellingStats', JSON.stringify(stats));
    updateHomeStats();
}

function updatePosStats(isCorrect) {
    const pos = currentWord.part_of_speech || 'unknown';
    if (!stats.posStats) stats.posStats = {};
    if (!stats.posStats[pos]) stats.posStats[pos] = { total: 0, correct: 0 };

    stats.posStats[pos].total++;
    if (isCorrect) stats.posStats[pos].correct++;
}

function updateWordStats(isCorrect, timeTaken) {
    if (!currentWord) return;
    const word = currentWord.word;

    if (!stats.wordStats) stats.wordStats = {};
    if (!stats.wordStats[word]) {
        stats.wordStats[word] = { attempts: 0, correct: 0, totalTime: 0, history: [] };
    }

    const ws = stats.wordStats[word];
    ws.attempts++;
    if (isCorrect) ws.correct++;
    ws.totalTime += timeTaken;
    ws.history.push({ date: Date.now(), correct: isCorrect, time: timeTaken });
    // Keep history manageable
    if (ws.history.length > 10) ws.history.shift();
}

// Advanced Pattern Analysis
function analyzeError(input, target) {
    if (!stats.errorPatterns) stats.errorPatterns = {};

    // 1. Check for Double Letters (missed or added)
    const targetDoubles = (target.match(/(.)\1/g) || []).map(m => m[0]);
    const inputDoubles = (input.match(/(.)\1/g) || []).map(m => m[0]);

    targetDoubles.forEach(char => {
        if (!inputDoubles.includes(char)) {
            const pattern = `missed_double_${char}`;
            stats.errorPatterns[pattern] = (stats.errorPatterns[pattern] || 0) + 1;
        }
    });

    // 2. Common Suffixes
    const suffixes = ['able', 'ible', 'ance', 'ence', 'tion', 'sion', 'ant', 'ent', 'ly', 'ary', 'ery'];
    suffixes.forEach(suffix => {
        if (target.endsWith(suffix) && !input.endsWith(suffix)) {
            const pattern = `suffix_${suffix}`;
            stats.errorPatterns[pattern] = (stats.errorPatterns[pattern] || 0) + 1;
        }
    });

    // 3. Silent Letters
    const silentMap = { 'kn': 'n', 'wr': 'r', 'gn': 'n', 'ps': 's', 'mb': 'm', 'wh': 'w' };
    Object.entries(silentMap).forEach(([pair, sound]) => {
        if (target.includes(pair) && !input.includes(pair) && input.includes(sound)) {
            const pattern = `silent_${pair}`;
            stats.errorPatterns[pattern] = (stats.errorPatterns[pattern] || 0) + 1;
        }
    });

    // 4. IE/EI Rule
    if ((target.includes('ie') && input.includes('ei')) || (target.includes('ei') && input.includes('ie'))) {
        stats.errorPatterns['ie_ei_confusion'] = (stats.errorPatterns['ie_ei_confusion'] || 0) + 1;
    }

    // 5. PH vs F
    if (target.includes('ph') && input.includes('f')) {
        stats.errorPatterns['ph_f_confusion'] = (stats.errorPatterns['ph_f_confusion'] || 0) + 1;
    }

    // 6. Y vs I endings
    if (target.endsWith('y') && input.endsWith('i')) {
        stats.errorPatterns['y_i_ending_confusion'] = (stats.errorPatterns['y_i_ending_confusion'] || 0) + 1;
    }
}

function showStats() {
    statsModal.classList.remove('hidden');

    document.getElementById('stat-total').textContent = stats.total;
    const acc = stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);
    document.getElementById('stat-accuracy').textContent = acc + '%';

    const avgTime = stats.wordsTimed > 0 ? (stats.totalTime / stats.wordsTimed).toFixed(1) : '0.0';
    document.getElementById('stat-speed').textContent = avgTime + 's';
    document.getElementById('stat-streak').textContent = stats.bestStreak;

    // POS Stats
    const posContainer = document.getElementById('pos-stats-container');
    posContainer.innerHTML = '';
    if (stats.posStats) {
        Object.entries(stats.posStats).forEach(([pos, data]) => {
            const posAcc = data.total === 0 ? 0 : Math.round((data.correct / data.total) * 100);
            const div = document.createElement('div');
            div.className = 'glass-panel';
            div.style.padding = '1rem';
            div.style.textAlign = 'center';
            div.innerHTML = `
                <h4 style="text-transform: capitalize; color: var(--text-muted); margin-bottom: 0.5rem;">${pos}</h4>
                <div style="font-size: 1.5rem; font-weight: 600;">${posAcc}%</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${data.correct}/${data.total}</div>
            `;
            posContainer.appendChild(div);
        });
    }

    // Mistakes
    const list = document.getElementById('mistakes-list');
    list.innerHTML = '';
    if (stats.mistakes && stats.mistakes.length > 0) {
        stats.mistakes.slice(0, 10).forEach(m => {
            const li = document.createElement('li');
            li.className = 'glass-card';
            li.style.padding = '0.5rem';
            li.style.marginBottom = '0.5rem';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.innerHTML = `<span>${m.word}</span> <span style="color: var(--text-muted); font-size: 0.8rem;">${new Date(m.date).toLocaleDateString()}</span>`;
            list.appendChild(li);
        });
    } else {
        list.innerHTML = '<li style="text-align:center; color: var(--text-muted);">No recent mistakes!</li>';
    }

    // Weakest Links
    const weakContainer = document.getElementById('weakest-links-container');
    if (weakContainer) {
        weakContainer.innerHTML = '';
        const weakWords = getWeakestLinks();
        if (weakWords.length > 0) {
            weakWords.forEach(w => {
                const div = document.createElement('div');
                div.className = 'stat-list-item';
                div.innerHTML = `
                    <span style="font-weight: 600;">${w.word}</span>
                    <span style="color: var(--text-muted); font-size: 0.9rem;">
                        ${Math.round(w.acc * 100)}% acc &bull; ${w.avgTime.toFixed(1)}s
                    </span>
                `;
                weakContainer.appendChild(div);
            });
        } else {
            weakContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Practice more to generate insights.</p>';
        }
    }

    // Error Patterns
    const patternContainer = document.getElementById('error-patterns-container');
    if (patternContainer) {
        patternContainer.innerHTML = '';
        const patterns = getCommonPatterns();
        if (patterns.length > 0) {
            patterns.forEach(p => {
                const div = document.createElement('div');
                div.className = 'pattern-chip';
                div.innerHTML = `
                    ${p.pattern} <span class="count">${p.count}</span>
                `;
                patternContainer.appendChild(div);
            });
        } else {
            patternContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; width: 100%;">No clear patterns detected yet.</p>';
        }
    }
}

function resetStats() {
    if (confirm('Are you sure you want to reset all statistics?')) {
        localStorage.removeItem('spellingStats');
        location.reload();
    }
}

function updateHomeStats() {
    const masteredEl = document.getElementById('top-mastered');
    if (masteredEl) masteredEl.textContent = stats.mastered ? stats.mastered.length : 0;

    const acc = stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);
    const accEl = document.getElementById('home-accuracy');
    if (accEl) accEl.textContent = acc + '%';

    const streakEl = document.getElementById('top-streak');
    if (streakEl) streakEl.textContent = stats.streak || 0;

    const totalEl = document.getElementById('home-total');
    if (totalEl) totalEl.textContent = stats.total || 0;

    // New: Average Speed
    const avgTime = stats.wordsTimed > 0 ? (stats.totalTime / stats.wordsTimed).toFixed(1) : '0.0';
    const speedEl = document.getElementById('home-speed');
    if (speedEl) speedEl.textContent = avgTime + 's';
}

function loadSettings() {
    const saved = localStorage.getItem('spellingSettings');
    if (saved) {
        settings = { ...settings, ...JSON.parse(saved) };
    }

    // Apply settings to UI
    document.getElementById('show-def').checked = settings.showDef;
    document.getElementById('show-pos').checked = settings.showPos;
    document.getElementById('show-dia').checked = settings.showDia;
    document.getElementById('show-sentence').checked = settings.showSentence;
    document.getElementById('show-ety').checked = settings.showEty;
    document.getElementById('auto-audio').checked = settings.autoAudio;
    document.getElementById('rate-range').value = settings.rate;
    document.getElementById('pitch-range').value = settings.pitch;
    document.getElementById('theme-toggle').checked = settings.theme === 'light';

    document.getElementById('rate-value').textContent = settings.rate;
    document.getElementById('pitch-value').textContent = settings.pitch;

    applyTheme();
}

function saveSettings() {
    localStorage.setItem('spellingSettings', JSON.stringify(settings));
}

function renderWordInfo() {
    if (!currentWord) return;
    // Re-run loadWord logic for visibility only? 
    // Easier to just call loadWord if we want to refresh display, but that resets input.
    // Let's just update visibility
    document.getElementById('section-def').style.display = settings.showDef ? 'block' : 'none';
    document.getElementById('section-sentence').style.display = settings.showSentence ? 'block' : 'none';
    document.getElementById('section-ety').style.display = settings.showEty ? 'block' : 'none';
    document.getElementById('info-pos').style.display = settings.showPos ? 'inline-block' : 'none';
    document.getElementById('info-dia').style.display = settings.showDia ? 'inline-block' : 'none';
}

function triggerConfetti() {
    // Simple confetti effect
    const colors = ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    for (let i = 0; i < 50; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'fixed';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-10px';
        conf.style.width = Math.random() * 10 + 5 + 'px';
        conf.style.height = Math.random() * 10 + 5 + 'px';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.transition = 'top 1s ease-in, transform 1s linear';
        conf.style.zIndex = '1000';
        document.body.appendChild(conf);

        setTimeout(() => {
            conf.style.top = '110vh';
            conf.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 10);

        setTimeout(() => {
            conf.remove();
        }, 1100);
    }
}

// Helper Functions for Stats
function getSmartWeakestLinks() {
    // 1. Get actual mistakes (low accuracy)
    let weakWords = [];
    if (stats.wordStats) {
        weakWords = Object.entries(stats.wordStats)
            .map(([word, data]) => {
                const acc = data.total === 0 ? 0 : data.correct / data.attempts;
                return { word, acc, attempts: data.attempts, source: 'history' };
            })
            .filter(w => w.attempts > 0 && w.acc < 0.8) // Threshold for "weak"
            .sort((a, b) => a.acc - b.acc);
    }

    // 2. Get predicted mistakes based on patterns
    const topPatterns = getCommonPatterns().slice(0, 3); // Top 3 patterns
    let predictedWords = [];

    if (topPatterns.length > 0) {
        wordList.forEach(w => {
            // Don't include if already mastered or in weak list
            if (stats.mastered && stats.mastered.includes(w.word)) return;
            if (weakWords.find(ww => ww.word === w.word)) return;

            let score = 0;
            topPatterns.forEach(p => {
                if (p.pattern.startsWith('missed_double_')) {
                    const char = p.pattern.split('_')[2];
                    if (w.word.includes(char + char)) score += p.count;
                } else if (p.pattern.startsWith('suffix_')) {
                    const suffix = p.pattern.split('_')[1];
                    if (w.word.endsWith(suffix)) score += p.count;
                } else if (p.pattern.startsWith('silent_')) {
                    const pair = p.pattern.split('_')[1];
                    if (w.word.includes(pair)) score += p.count;
                } else if (p.pattern === 'ie_ei_confusion') {
                    if (w.word.includes('ie') || w.word.includes('ei')) score += p.count;
                } else if (p.pattern === 'ph_f_confusion') {
                    if (w.word.includes('ph')) score += p.count;
                } else if (p.pattern === 'y_i_ending_confusion') {
                    if (w.word.endsWith('y')) score += p.count;
                }
            });

            if (score > 0) {
                predictedWords.push({ word: w.word, score, source: 'prediction' });
            }
        });
    }

    // Sort predicted by score (relevance)
    predictedWords.sort((a, b) => b.score - a.score);

    // Combine: 60% history, 40% prediction
    const combined = [
        ...weakWords.slice(0, 6).map(w => wordList.find(wl => wl.word === w.word) || { word: w.word }),
        ...predictedWords.slice(0, 4).map(w => wordList.find(wl => wl.word === w.word) || { word: w.word })
    ];

    // If not enough, fill with random
    if (combined.length < 10) {
        const remaining = wordList.filter(w => !combined.find(c => c.word === w.word));
        combined.push(...remaining.sort(() => Math.random() - 0.5).slice(0, 10 - combined.length));
    }

    return combined.sort(() => Math.random() - 0.5); // Shuffle final list
}

function getWeakestLinks() {
    // Legacy support for stats view
    if (!stats.wordStats) return [];
    return Object.entries(stats.wordStats)
        .map(([word, data]) => ({
            word,
            acc: data.attempts > 0 ? data.correct / data.attempts : 0,
            avgTime: data.attempts > 0 ? data.totalTime / data.attempts : 0,
            attempts: data.attempts
        }))
        .filter(w => w.attempts > 0 && w.acc < 1)
        .sort((a, b) => a.acc - b.acc)
        .slice(0, 10);
}

function getCommonPatterns() {
    if (!stats.errorPatterns) return [];

    return Object.entries(stats.errorPatterns)
        .map(([pattern, count]) => ({ pattern, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
}

// Start
init();

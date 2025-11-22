// State
let currentWordIndex = 0;
let currentWord = null;
let shuffledList = [];
let stats = {
    total: 0,
    correct: 0,
    mistakes: []
};
let settings = {
    darkMode: false,
    mode: 'practice', // practice, test
    showDef: true,
    showPos: true,
    showDia: true,
    showSentence: true,
    showEty: true,
    voiceURI: null,
    autoAudio: false
};

// DOM Elements
const homeView = document.getElementById('home-view');
const gameView = document.getElementById('game-view');
const startBtn = document.getElementById('start-btn');
const homeBtn = document.getElementById('home-btn');

const wordInfoCard = document.getElementById('word-info-card');
const wordInput = document.getElementById('word-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackContainer = document.getElementById('feedback-container');
const correctAnswerContainer = document.getElementById('correct-answer-container');
const playAudioBtn = document.getElementById('play-audio-btn');
const settingsModal = document.getElementById('settings-modal');
const statsModal = document.getElementById('stats-modal');
const settingsBtn = document.getElementById('settings-btn');
const statsBtn = document.getElementById('stats-btn');
const closeButtons = document.querySelectorAll('.close-modal');
const themeToggle = document.getElementById('theme-toggle');
const autoAudioToggle = document.getElementById('auto-audio');
const modeSelect = document.getElementById('mode-select');
const voiceSelect = document.getElementById('voice-select');

// Init
function init() {
    if (typeof wordList === 'undefined' || !Array.isArray(wordList)) {
        document.body.innerHTML = '<div style="color: red; padding: 20px; text-align: center;"><h1>Error: Data not loaded</h1><p>Please ensure data.js is in the same directory and contains valid data.</p></div>';
        console.error("wordList is not defined");
        return;
    }

    loadSettings();
    loadStats();
    shuffledList = [...wordList].sort(() => Math.random() - 0.5);
    populateVoices();

    // Event Listeners
    startBtn.addEventListener('click', () => switchView('game'));
    homeBtn.addEventListener('click', () => switchView('home'));

    submitBtn.addEventListener('click', checkWord);
    nextBtn.addEventListener('click', nextWord);
    wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkWord();
    });
    playAudioBtn.addEventListener('click', playAudio);

    settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
    statsBtn.addEventListener('click', () => {
        updateStatsUI();
        statsModal.classList.remove('hidden');
    });

    closeButtons.forEach(btn => btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.add('hidden');
    }));

    // Settings Listeners
    themeToggle.addEventListener('change', (e) => {
        settings.darkMode = e.target.checked;
        saveSettings();
        updateUI();
    });

    if (autoAudioToggle) {
        autoAudioToggle.addEventListener('change', (e) => {
            settings.autoAudio = e.target.checked;
            saveSettings();
        });
    }

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

    modeSelect.addEventListener('change', (e) => {
        settings.mode = e.target.value;
        saveSettings();
        renderWordInfo();
    });

    voiceSelect.addEventListener('change', (e) => {
        settings.voiceURI = e.target.value;
        saveSettings();
    });

    // Voice loading might be async
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoices;
    }
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

function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (voice.voiceURI === settings.voiceURI) {
            option.selected = true;
        }
        voiceSelect.appendChild(option);
    });
}

function loadWord() {
    if (currentWordIndex >= shuffledList.length) {
        currentWordIndex = 0;
        shuffledList = [...wordList].sort(() => Math.random() - 0.5);
    }
    currentWord = shuffledList[currentWordIndex];

    // Reset UI
    wordInput.value = '';
    wordInput.disabled = false;
    feedbackContainer.innerHTML = '';
    correctAnswerContainer.innerHTML = '';
    correctAnswerContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    submitBtn.disabled = false;
    wordInput.focus();

    renderWordInfo();

    if (settings.autoAudio) {
        // Small delay to ensure UI is ready
        setTimeout(playAudio, 300);
    }
}

function renderWordInfo() {
    const isTest = settings.mode === 'test';

    // Helper to toggle visibility
    const setVis = (id, show) => {
        const el = document.getElementById(id);
        if (el) el.style.display = show ? 'flex' : 'none';
    };

    setVis('info-pos', !isTest && settings.showPos);
    setVis('info-dia', !isTest && settings.showDia);
    setVis('info-def', !isTest && settings.showDef);
    setVis('info-sentence', !isTest && settings.showSentence);
    setVis('info-etymology', !isTest && settings.showEty);

    // Update content
    if (currentWord) {
        document.querySelector('#info-pos .value').textContent = currentWord.part_of_speech || 'N/A';
        document.querySelector('#info-dia .value').textContent = currentWord.diacritic ? `/${currentWord.diacritic}/` : '';
        document.querySelector('#info-def .value').textContent = currentWord.definition || '';
        document.querySelector('#info-sentence .value').textContent = currentWord.example_sentence || '';
        document.querySelector('#info-etymology .value').textContent = currentWord.etymology || '';
    }
}

function playAudio() {
    if (!currentWord) return;
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.voiceURI === settings.voiceURI);
    if (selectedVoice) utterance.voice = selectedVoice;
    speechSynthesis.speak(utterance);
}

function checkWord() {
    const input = wordInput.value.trim().toLowerCase();
    const target = currentWord.word.toLowerCase();

    if (!input) return;

    // Generate Feedback Tiles
    feedbackContainer.innerHTML = '';

    // Wordle Logic
    const result = Array(Math.max(input.length, target.length)).fill('wrong');
    const targetArr = target.split('');
    const inputArr = input.split('');

    // First pass: Correct positions
    const targetUsed = Array(target.length).fill(false);
    const inputUsed = Array(input.length).fill(false);

    // We iterate up to the length of the input
    for (let i = 0; i < inputArr.length; i++) {
        if (i < targetArr.length && inputArr[i] === targetArr[i]) {
            result[i] = 'correct';
            targetUsed[i] = true;
            inputUsed[i] = true;
        }
    }

    // Second pass: Misplaced
    for (let i = 0; i < inputArr.length; i++) {
        if (result[i] !== 'correct') {
            const letter = inputArr[i];
            // Find if this letter exists elsewhere in target and is not used
            const foundIdx = targetArr.findIndex((l, idx) => l === letter && !targetUsed[idx]);
            if (foundIdx !== -1) {
                result[i] = 'misplaced';
                targetUsed[foundIdx] = true;
            }
        }
    }

    // Render Tiles
    inputArr.forEach((char, i) => {
        const tile = document.createElement('div');
        tile.className = `tile ${result[i]}`;
        tile.textContent = char;
        feedbackContainer.appendChild(tile);
    });

    // Check if fully correct
    if (input === target) {
        stats.total++;
        stats.correct++;
        saveStats();
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        correctAnswerContainer.classList.add('hidden');
        nextBtn.focus();
    } else {
        // Wrong Answer Logic
        if (!stats.mistakes.find(m => m.word === currentWord.word)) {
            stats.mistakes.unshift({ word: currentWord.word, date: new Date().toISOString() });
            if (stats.mistakes.length > 50) stats.mistakes.pop();
            stats.total++; // Count attempt
            saveStats();
        }

        // Show correct spelling
        correctAnswerContainer.innerHTML = `Incorrect! The correct spelling is: <strong>${currentWord.word}</strong>`;
        correctAnswerContainer.classList.remove('hidden');
    }
}

function nextWord() {
    currentWordIndex++;
    loadWord();
}

// Settings & Stats Persistence
function loadSettings() {
    const saved = localStorage.getItem('spellingSettings');
    if (saved) {
        settings = { ...settings, ...JSON.parse(saved) };
        // Update UI controls
        themeToggle.checked = settings.darkMode;
        if (autoAudioToggle) autoAudioToggle.checked = settings.autoAudio;
        document.getElementById('show-def').checked = settings.showDef;
        document.getElementById('show-pos').checked = settings.showPos;
        document.getElementById('show-dia').checked = settings.showDia;
        document.getElementById('show-sentence').checked = settings.showSentence;
        document.getElementById('show-ety').checked = settings.showEty;
        modeSelect.value = settings.mode;
    }
    updateUI();
}

function saveSettings() {
    localStorage.setItem('spellingSettings', JSON.stringify(settings));
}

function updateUI() {
    if (settings.darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function loadStats() {
    const saved = localStorage.getItem('spellingStats');
    if (saved) stats = JSON.parse(saved);
}

function saveStats() {
    localStorage.setItem('spellingStats', JSON.stringify(stats));
}

function updateStatsUI() {
    document.getElementById('stat-total').textContent = stats.total;
    document.getElementById('stat-correct').textContent = stats.correct;
    const acc = stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);
    document.getElementById('stat-accuracy').textContent = acc + '%';

    const list = document.getElementById('mistakes-list');
    list.innerHTML = '';
    stats.mistakes.slice(0, 10).forEach(m => {
        const li = document.createElement('li');
        li.textContent = m.word;
        list.appendChild(li);
    });
}

document.getElementById('reset-stats').addEventListener('click', () => {
    stats = { total: 0, correct: 0, mistakes: [] };
    saveStats();
    updateStatsUI();
});

// Start
init();

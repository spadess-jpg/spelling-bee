# Spelling Bee Practice App

This is a web-based application to practice spelling words from the Semi Final Word List.

## How to Use
1. **Hosting**: Create a simple http server by cloning the repo and running "py -m http.server 8000 -b 0.0.0.0" in the root directory.
    - Alternative: Open `index.html` in your web browser (Chrome, Edge, Firefox, etc.). _Note: This method is not recommended._
2. **Practice Mode**: You will see the definition, part of speech, and other details. Type the word and check your spelling.
3. **Test Mode**: Switch to Test Mode in Settings to hide the text hints and rely on the audio.
4. **Settings**: Click the Gear icon to toggle Dark Mode, change the voice, or show/hide specific hints.
5. **Statistics**: Click the Chart icon to see your progress.

## Features
- **Wordle-style Feedback**: Green tiles for correct letters, Yellow for misplaced, Red for wrong.
- **Customizable**: Toggle definitions, etymology, sentences, and more.
- **Audio**: Listen to the word pronunciation.
- **Stats**: Track your accuracy and review missed words.

## Files
- `index.html`: Main application file.
- `style.css`: Styling and themes.
- `script.js`: Application logic.
- `data.js`: Word list data (converted from Excel).

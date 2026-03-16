```javascript
/* ******************** BLOCK 4 (LINES 1-500) ******************** */
/* ==================== script.js ==================== */
// GHOST BUILDER v6.0 - Terminal Typewriter Effect
// Strictly JavaScript - No HTML/CSS

// Wait for the DOM to be fully loaded
window.addEventListener('DOMContentLoaded', function() {
    // Get the terminal element
    const terminal = document.getElementById('ghost-terminal');
    if (!terminal) return;

    // Clear any static placeholder lines from HTML
    terminal.innerHTML = '';

    // Define the lines to be typed in sequence
    const lines = [
        '> INITIALIZING GHOST CORE...',
        '> LOADING INDUSTRIAL PROTOCOLS...',
        '> SYSTEM ONLINE v6.0'
    ];

    // Typing speed (milliseconds per character)
    const typingSpeed = 50;
    // Delay between lines (after finishing one line)
    const lineDelay = 400;

    // Current line index being processed
    let currentLine = 0;

    // Function to type a single line character by character
    function typeLine(lineIndex) {
        if (lineIndex >= lines.length) {
            // All lines completed: add a blinking cursor
            addCursor();
            return;
        }

        const lineText = lines[lineIndex];
        const lineElement = document.createElement('div');
        lineElement.className = 'line';
        terminal.appendChild(lineElement);

        let charIndex = 0;

        function typeCharacter() {
            if (charIndex < lineText.length) {
                lineElement.textContent += lineText.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                // Line finished, move to next line after a delay
                currentLine++;
                setTimeout(() => typeLine(currentLine), lineDelay);
            }
        }

        // Start typing this line
        typeCharacter();
    }

    // Add a blinking cursor after all lines are printed
    function addCursor() {
        const cursorLine = document.createElement('div');
        cursorLine.className = 'line cursor';
        cursorLine.textContent = '_'; // The cursor character
        terminal.appendChild(cursorLine);
    }

    // Start the typewriter effect
    typeLine(currentLine);
});

/* ******************** END BLOCK 4 ******************** */
// Next: Block 5 will expand interactivity for buttons and progress nodes
```

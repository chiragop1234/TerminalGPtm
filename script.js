const terminalContainer = document.getElementById('terminal');
const input = document.getElementById('input');
const term = new Terminal();
const fitAddon = new FitAddon.FitAddon();

term.open(terminalContainer);
term.loadAddon(fitAddon);

// Set up the fit addon to resize the terminal when the window is resized
window.addEventListener('resize', () => {
    fitAddon.fit();
});

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = input.value;
        input.value = '';

        term.write(`\r\n$ ${command}\r\nOutput: This is a simulated result.\r\n`);
        term.write('$ ');
    }
});

term.write('$ ');

term.focus();
fitAddon.fit(); // Initial fit

// Capture user input and write to terminal
input.addEventListener('input', function () {
    term.write(input.value.slice(-1)); // Write the last character of input to the terminal
});

// Handle backspace to remove characters from the terminal
input.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        event.preventDefault();
        const inputValue = input.value.slice(0, -1);
        input.value = inputValue;
        term.write('\b \b'); // Move the cursor back and erase the character
    }
});

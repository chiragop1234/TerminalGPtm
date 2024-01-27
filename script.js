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

input.addEventListener('keydown', function(event) {
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


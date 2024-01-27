const terminalContainer = document.getElementById('terminal');
const term = new Terminal();

// Attach the terminal to the DOM
term.open(terminalContainer);

// Simulate command execution
function executeCommand(command) {
    term.write(`\r\n$ ${command}\r\n`);
    term.write('Output: This is a simulated result.\r\n');
}

// Handle user input
term.onKey(e => {
    const printable = !e.altKey && !e.ctrlKey && !e.metaKey;

    if (e.key === '\r') {
        const command = term.buffer.getLine(term.buffer.cursorY).translateToString().trim();
        executeCommand(command);
        term.write('\r\n$ ');
    } else if (printable) {
        term.write(e.key);
    }
});

// Initial prompt
term.write('$ ');

// Focus the terminal
term.focus();

const terminalContainer = document.getElementById('terminal');
const input = document.getElementById('input');
const term = new Terminal();

term.open(terminalContainer);

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

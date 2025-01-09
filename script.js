let isCapsLock = false;
let isShift = false;

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const input = document.getElementById('input');
        const keyText = key.textContent;

        if (keyText === 'Caps Lock') {
            isCapsLock = !isCapsLock;
        } else if (keyText === 'Shift') {
            isShift = !isShift;
        } else if (keyText === 'Space') {
            input.value += ' ';
        } else {
            let char = keyText;
            if (isCapsLock || isShift) {
                char = char.toUpperCase();
            } else {
                char = char.toLowerCase();
            }
            input.value += char;
            if (isShift) {
                isShift = false; // Turn off shift after one use
            }
        }
    });
});

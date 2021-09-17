function hello() {
    let name = document.getElementById('yourName').value;
    let effect = document.getElementById('result');
    effect.textContent = `Привет, ${name}!`;
}

function clean() {
    let effect = document.getElementById('result');
    effect.textContent = '';
}


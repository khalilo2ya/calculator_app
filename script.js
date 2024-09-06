function appendNumber(number) {
    document.getElementById('screen').value += number;
}

function appendOperator(operator) {
    document.getElementById('screen').value += operator;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteNumber() {
    const currentValue = document.getElementById('screen').value;
    document.getElementById('screen').value = currentValue.slice(0, -1);
}

function calculate() {
    const result = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = result;
}

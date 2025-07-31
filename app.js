let currentInput = "0";
let firstNumber = null;
let operation = null;

function press(value) {

    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').value = currentInput;
    console.log(currentInput);
}
function calculate() {

    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch {
        document.getElementById('display').value = 'Error';
        currentInput = '0';
    }
    console.log(currentInput);
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = currentInput;
}






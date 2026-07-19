const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval() processes the string expression and returns the math result
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
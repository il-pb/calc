const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');


let calculation = [];
let accumulativeCalculation;


function calculate(button) {
    const value = button.textContent;

    if (value == 'AC') {
        calculation = [];
        output.textContent = '';
    } else if (value === '=') {
        output.textContent = eval(accumulativeCalculation);
    } else {
        calculation.push(value);
        accumulativeCalculation = calculation.join('');
        output.textContent = accumulativeCalculation;
    }
};

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
let display = document.getElementById('display-number');
const number0 = document.getElementById('number0');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const buttons = document.querySelectorAll('button');
const numbers = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9];
let primoNumero = 0;
let secondoNumero = 0;
let operatore = "";

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 0;
    }
}

function add(a, b, operator) {
    return a + b;
}


function subtract(a, b, operator) {
    return a - b;
}


function multiply(a, b, operator) {
    return a * b;
}


function divide(a, b, operator) {
    return a / b;
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        switch (button.id) {
            case 'number0':
                populate('0');
                break;
            case 'number1':
                populate('1');
                break;
            case 'number2':
                populate('2');
                break;
            case 'number3':
                populate('3');
                break;
            case 'number4':
                populate('4');
                break;
            case 'number5':
                populate('5');
                break;
            case 'number6':
                populate('6');
                break;
            case 'number7':
                populate('7');
                break;
            case 'number8':
                populate('8');
                break;
            case 'number9':
                populate('9');
                break;
            case 'add':
                populate('+');
                break;
            case 'subtract':
                populate('-');
                break;
            case 'multiply':
                populate('*');
                break;
            case 'divide':
                populate('/');
                break;
            case 'equal':

            default:
                break;
        }
    });
});


// add number to display
function populate(num) {
    
    if (isNumber(num)) {
        display.innerHTML = display.innerHTML + num;
        if (operatore === "") {
            primoNumero = primoNUmero + num;
        } else {
          secondoNumero = secondoNumero + num;
        }
    } else if (isOperator(num)) {
        operatore = num;
        // Salva il primo numero
        primoNumero = display.innerHTML;
        display.innerHTML += num;
    } else {
        // Gestisci altri input (potresti implementare la logica necessaria)
    }
}

function isNumber(value) {
    return !isNaN(value);
}

function isOperator(value) {
    // Aggiungi altri operatori se necessario
    return value === '+' || value === '-' || value === '*' || value === '/';
}

//stores numbers and operator and make the operation, then display the result

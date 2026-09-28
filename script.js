let firstNumber = "";
let operator = "";
let secondNumber = "";
let waitingForSecondNumber = false;

const buttons = document.querySelectorAll(".buttons button");

const display = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        
        const value = button.textContent;
        if (value === "Clear"){
            firstNumber = "";
            operator = "";
            secondNumber = "";
            waitingForSecondNumber = false;
            display.textContent = "0";

            return;
        }
        if (value === "."){
            if (waitingForSecondNumber){
                display.textContent ="0.";
                waitingForSecondNumber = false;
            } else if(!display.textContent.includes(".")){
                display.textContent += ".";
            }

            return;
        }
        if (value === "+" || value ==="-" || value ==="x" || value ==="/"){
            if (waitingForSecondNumber){
                operator = value;
                return;
            }
            firstNumber = display.textContent;
            operator = value;
            waitingForSecondNumber = true;

            return;
        }

        if (value === "="){
            if (firstNumber === "" || operator === "" || waitingForSecondNumber){
                return;
            }
            secondNumber = display.textContent;

            const num1 = Number(firstNumber);
            const num2 = Number(secondNumber);

            const result = operate(num1, operator, num2);

            display.textContent = result;
            firstNumber = result;

            return;
        }
        if (waitingForSecondNumber){
            display.textContent = value;
            waitingForSecondNumber = false;
        }else if (display.textContent === "0"){
            display.textContent = value;
        } else {
              display.textContent += value
        }
        
    });
});


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return "cannot divide by zero";
    }
    return a / b;
}
 
function operate(a, operator, b){
    if (operator === "+"){
        return add(a,b);
    }
    if (operator === "-"){
        return subtract(a,b);
    }
    if (operator === "x"){
        return multiply(a,b);
    }
    if (operator === "/"){
        return divide(a,b);
    }
}


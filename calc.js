function calc(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultText = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerHTML = "Please enter valid numbers.";
        return;
    }

    var result;
    switch (operation) {
        case '+':
            result = add(num1, num2);
            resultText.innerHTML = "The sum of " +num1+ " and " +num2+ " is " +result+ ".";
            break;
        case '-':
            result = subtract(num1, num2);
            resultText.innerHTML = "The difference of " +num1+ " and " +num2+ " is " +result+ ".";
            break;
        case '*':
            result = multiply(num1, num2);
            resultText.innerHTML = "The product of " +num1+ " and " +num2+ " is " +result+ ".";
            break;
        case '/':
            if (num2 === 0) {
                resultText.innerHTML = "Cannot divide by zero.";
                return;
            }
            result = divide(num1, num2);
            resultText.innerHTML = "The quotient of " +num1+ " and " +num2+ " is " +result+ ".";
            break;
        case '%':
            result = modulus(num1, num2);
            resultText.innerHTML = "The remainder of " +num1+ " and " +num2+ " is " +result+ ".";
            break;
        default:
            resultText.innerHTML = "Invalid operation.";
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}
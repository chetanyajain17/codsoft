document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById('result');
    let currentInput = '';
    let isDecimalAdded = false;
    let isParenthesesOpen = false;

    // Handle number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', function() {
            currentInput += button.textContent;
            result.value = currentInput;
        });
    });

    // Handle operator buttons
    document.getElementById('add').addEventListener('click', function() {
        currentInput += '+';
        result.value = currentInput;
        isDecimalAdded = false;
    });

    document.getElementById('subtract').addEventListener('click', function() {
        currentInput += '-';
        result.value = currentInput;
        isDecimalAdded = false;
    });

    document.getElementById('multiply').addEventListener('click', function() {
        currentInput += '*';
        result.value = currentInput;
        isDecimalAdded = false;
    });

    document.getElementById('divide').addEventListener('click', function() {
        currentInput += '/';
        result.value = currentInput;
        isDecimalAdded = false;
    });

    document.getElementById('percentage').addEventListener('click', function() {
        currentInput += '%';
        result.value = currentInput;
    });

    document.getElementById('decimal').addEventListener('click', function() {
        if (!isDecimalAdded) {
            currentInput += '.';
            result.value = currentInput;
            isDecimalAdded = true;
        }
    });

    document.getElementById('clear').addEventListener('click', function() {
        currentInput = '';
        result.value = '';
        isDecimalAdded = false;
    });

    document.getElementById('plusMinus').addEventListener('click', function() {
        if (currentInput) {
            if (currentInput.startsWith('-')) {
                currentInput = currentInput.substring(1);
            } else {
                currentInput = '-' + currentInput;
            }
            result.value = currentInput;
        }
    });

    document.getElementById('parentheses').addEventListener('click', function() {
        if (isParenthesesOpen) {
            currentInput += ')';
        } else {
            currentInput += '(';
        }
        isParenthesesOpen = !isParenthesesOpen;
        result.value = currentInput;
    });

    document.getElementById('equals').addEventListener('click', function() {
        try {
            currentInput = eval(currentInput.replace(/%/g, '/100'));
            result.value = currentInput;
        } catch (error) {
            result.value = 'Error';
        }
    });
});




const displayHistory = document.querySelector("#history");
const displayMain = document.querySelector("#main");
const buttons = document.querySelectorAll(".button");

let main = "";
let history = "";
let pendingOperation = "";

function updateDisplay(){
    displayHistory.textContent = history;
    displayMain.textContent = main;
}

function evaluate() {
    switch (pendingOperation){
        case '+':
            main = (parseFloat(history) + parseFloat(main)).toString();
            break;
        case '-':
            main = (parseFloat(history) - parseFloat(main)).toString();
            break;
        case 'x':
            main = (parseFloat(history) * parseFloat(main)).toString();
            break;
        case '/':
            main = (parseFloat(history) / parseFloat(main)).toString();
            break;
        case '%':
            main = (parseFloat(history) % parseFloat(main)).toString();
            break;
    }
}

function editMain(arg) {
    if (main === "0" && arg != '←'){
        main = main.slice(0,-1);
    }
    switch(arg){
        case '0':
            main += '0';
            break;
        case '1': 
            main += '1';
            break;
        case '2': 
            main += '2';
            break;
        case '3': 
            main += '3';
            break;
        case '4': 
            main += '4';
            break;
        case '5': 
            main += '5';
            break;
        case '6': 
            main += '6';
            break;
        case '7': 
            main += '7';
            break;
        case '8': 
            main += '8';
            break;
        case '9': 
            main += '9';
            break;
        case '←':
            main = main.slice(0,-1);
    }
    updateDisplay();
}

buttons.forEach( node => {
    const buttonChar = node.textContent;
    switch(buttonChar){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '←':
            node.addEventListener("click", e => editMain(buttonChar));
            break;
        case 'C':
            node.addEventListener("click", e => {
                main = "";
                history = "";
                updateDisplay();
            });
            break;
        case '.':
            node.addEventListener("click", e => {
                if (!main.includes('.')){
                    if (main === ""){
                        main += '0';
                    }
                    main += '.';
                    updateDisplay();
                }
            });
            break;
        case '%':
            node.addEventListener("click", e => {
                if (pendingOperation !== "") {
                    evaluate();
                }
                history = main;
                main = "";
                pendingOperation = '%';
                updateDisplay();
            });
            break;
        case '/':
            node.addEventListener("click", e => {
                if (pendingOperation !== "") {
                    evaluate();
                }
                history = main;
                main = "";
                pendingOperation = '/';
                updateDisplay();
            });
            break;
        case 'x':
            node.addEventListener("click", e => {
                if (pendingOperation !== "") {
                    evaluate();
                }
                history = main;
                main = "";
                pendingOperation = 'x';
                updateDisplay();
            });
            break;
        case '-':
            node.addEventListener("click", e => {
                if (pendingOperation !== "") {
                    evaluate();
                }
                history = main;
                main = "";
                pendingOperation = '-';
                updateDisplay();
            });
            break;
        case '+':
            node.addEventListener("click", e => {
                if (pendingOperation !== "") {
                    evaluate();
                }
                history = main;
                main = "";
                pendingOperation = '+';
                updateDisplay();
            });
            break;
        case '=':
            node.addEventListener("click", e => {
                evaluate();
                history = "";
                pendingOperation = "";
                updateDisplay();
            });
            break;
    }
});
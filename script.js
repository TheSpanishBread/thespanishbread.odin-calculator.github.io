let num1 = "";
let num2 = "";
let operator = "";
let total ;
//buttons

const clear = document.querySelector("#clear");
const sign = document.querySelector("#sign");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const subtract = document.querySelector("#subtract");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const add = document.querySelector("#add");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
//display
const displayOperation1 = document.createElement("p");
const displayOperation2 = document.createElement("p");
const displayTotalResult = document.createElement("p");
const displayOperator = document.createElement("p");


const displayTotal = document.querySelector("#total");
const displayOperations = document.querySelector("#operations");

//special commands
clear.addEventListener("click",function(){
    reset();
    total = "";
    textContents();
    Appends();
})
sign.addEventListener("click",function(){
    switch (true) {
        case (num2=="" && total==""):
                num1 = Number(num1);
                num1 = num1 * -1;
                num1 = String(num1);
            break;
        case (total==""):
                if (operator == "+"){
                    operator = "-";
                }else{
                    operator = "+";
                }
        break;
        case (num1=="" && num2==""):
            total = Number(total);
            total = total * -1;
            total = String(total);
        break;    
        default:
            break;
    }
    textContents();
    Appends();
})
decimal.addEventListener("click",function(){
    switch (true) {
        case (num2=="" && total==""):
                if(!num1.includes(".")){
                    num1 = num1 + ".";    
                }
                
            break;
        case (total=="" ):
            if(!num2.includes(".")){
                num2 = num2 + ".";    
            }
        break;
        case (num1=="" && num2==""):
            if(!total.includes(".")){
                total = total + ".";    
            }
        break;    
        default:
            break;
    }
    textContents();
    Appends();
});
percent.addEventListener("click",function(){
    switch (true) {
        case (num2=="" && total==""):
                num1 = num1 / 100;
            break;
        case (total==""):
            num2 = num2 / 100;
        break;
        case (num1=="" && num2==""):
            total = total /100;
        break;    
        default:
            break;
    }
    textContents();
    Appends();
})
//numbers

one.addEventListener("click", function(){
    total = "";
    enterNum("1");
    textContents();
    Appends();
});
two.addEventListener("click", function(){
    total = "";
    enterNum("2");
    textContents();
    Appends();
});
three.addEventListener("click", function(){
    total = "";
    enterNum("3");
    textContents();
    Appends();
});
four.addEventListener("click", function(){
    total = "";
    enterNum("4");
    textContents();
    Appends();
});
five.addEventListener("click", function(){
    total = "";
    enterNum("5");
    textContents();
    Appends();
});
six.addEventListener("click", function(){
    total = "";
    enterNum("6");
    textContents();
    Appends();
});
seven.addEventListener("click", function(){
    total = "";
    enterNum("7");
    textContents();
    Appends();
});
eight.addEventListener("click", function(){
    total = "";
    enterNum("8");
    textContents();
    Appends();
});
nine.addEventListener("click", function(){
    total = "";
    enterNum("9");
    textContents();
    Appends();
});
zero.addEventListener("click", function(){
    total = "";
    enterNum("0");
    textContents();
    Appends();
});

///operator
add.addEventListener("click", function(){
    operator = "+";
    totalToNum1()
    operate2("+");  // when pressed and no num2, total goes to num1 and ready for num2
    textContents();
    Appends();
    
    

});
subtract.addEventListener("click", function(){
    operator = "-";
    totalToNum1()
    operate2("-");
    textContents();
    Appends();
    //total = operate2(num1,num2,operator);
    

});
multiply.addEventListener("click", function(){
    operator = "*";
    totalToNum1()
    operate2("*");
    textContents();
    Appends();
    //total = operate2(num1,num2,operator);
    

});
divide.addEventListener("click", function(){
    operator = "/";
    totalToNum1()
    operate2("/");
    textContents();
    Appends();
    //total = operate2(num1,num2,operator);
    //try num1 = total addcondition.

});
equals.addEventListener("click", function(){
    
    total = operate(num1,num2,operator);
    textContents();
    Appends();

    
});

//functions
function enterNum(number){
    if (operator == ""){
        num1 += number;
    }else{
        num2 += number;
    }
    }

function operate(num1,num2,operator){
    num1 = Number(num1);
    num2 = Number(num2);

    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            reset();
            return String(result);
            break;
        case "-":
            result = num1 - num2;
            reset();
            return String(result);
            break;
        case "*":
            result = num1 * num2;
            reset();
            return String(result);
            break;
        case "/":
            result = num1 / num2;
            if (num2 == 0){
                return "Nope try again :D";
            }
            reset();
            return String(result);
            break;
                                
        default:
            return num1;
            break;
    }

}
function operate2(nextOperator){
    if (num2 !== ""){
        total = operate(num1,num2,operator);
        operator = nextOperator;
        num1 = total;
        total = "";
    }    
}
function reset(){    
    num1 ="";
    num2 ="";
    operator ="";
}
function Appends(){
    displayOperations.appendChild(displayOperation1);
    displayOperations.appendChild(displayOperator);
    displayOperations.appendChild(displayOperation2);
    displayTotal.appendChild(displayTotalResult);
}
function textContents(){
    displayOperation1.textContent = num1;
    displayOperator.textContent =  operator;
    displayOperation2.textContent = num2;
    displayTotal.textContent = total;
}
function totalToNum1(){
    if (total !== ""){
        num1 = total;
        total ="";
    }
}
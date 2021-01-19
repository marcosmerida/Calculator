//variables
var a;
var b;
var operation;
//elements
var result_span = document.getElementById("resultado");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiplication = document.getElementById("multiplication");
var division = document.getElementById("division");
var reset = document.getElementById("reset");
var equals = document.getElementById("equals");

// Events for each number and reset button.
zero.onclick = () => {result_span.textContent = result_span.textContent + "0"};
one.onclick = () => {result_span.textContent = result_span.textContent + "1"};
two.onclick = () => {result_span.textContent = result_span.textContent + "2"};
three.onclick = () => {result_span.textContent = result_span.textContent + "3"};
four.onclick = () => {result_span.textContent = result_span.textContent + "4"};
five.onclick = () => {result_span.textContent = result_span.textContent + "5"};
six.onclick = () => {result_span.textContent = result_span.textContent + "6"};
seven.onclick = () => {result_span.textContent = result_span.textContent + "7"};
eight.onclick = () => {result_span.textContent = result_span.textContent + "8"};
nine.onclick = () => {result_span.textContent = result_span.textContent + "9"};
reset.onclick = () => {result_span.textContent = "" , a = 0 , b = 0, operation = ""};

// Events for each operator.
plus.onclick = () =>{a = result_span.textContent, operation = "+", clean()};
minus.onclick = () =>{a = result_span.textContent, operation = "-", clean()};
multiplication.onclick = () =>{a = result_span.textContent, operation = "*", clean()};
division.onclick = () =>{a = result_span.textContent, operation = "/", clean()};
equals.onclick = () =>{b = result_span.textContent, resolve()};    

function resolve(){
    let result;
    switch(operation){
        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            res = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            res = parseFloat(a) / parseFloat(b);
            break;
    }
    result_span.textContent = "" , a = 0 , b = 0, operation = "";
    result_span.textContent = res; 
}
 var clean = () => {result_span.textContent = ""};



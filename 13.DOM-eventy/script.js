//Zadanie 1

let el = document.getElementById('test-event');

/*el.addEventListener("click", function(event){
   console.log(event); 
});

document.addEventListener("mousemove", function(event){
    console.log(event);
});
el.addEventListener("mouseover",function(event1){
   console.log(event1); 
});

document.addEventListener("keypress",function(event2){
   console.log(event2); 
});

document.addEventListener("scroll",function(event3){
       console.log(event3);                   
 });*/

let text = document.getElementById("input-test");

text.addEventListener("change", function(event4)
 {
    console.log(event4);
});

//Zadanie 2

const span = document.querySelector("#span-ex2")

document.querySelector("#ex2").addEventListener("click", e => {
    span.innerHTML = e.target.getAttribute("data-text");
});
  
//Zadanie 3

const redElement = document.querySelector("#ex3");

redElement.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "blue"; 
});

redElement.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "red";
});

//Zadanie 4

const illegalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = illegalChars.some(char => e.target.value.includes(char))
        ? 'To pole nie może zawierać cyfr'
        : null;
});

//Zadanie 5

const counterBtn = document.getElementById('ex5-button');
const counterContainer = document.getElementById('ex5');
let counter = 0;
function counterAction () {
    counter++;
    counterContainer.innerText = counter;
    if(counter >= 10) {
        counterBtn.removeEventListener('click', counterAction);
    }
}
counterBtn.addEventListener('click', counterAction);

//Zadanie 6

var body = document.getElementsByTagName("body")[0];
document.addEventListener("scroll", (e) => {
    if(window.scrollY >= 200) 
        body.style.backgroundColor = "red";
    else 
      body.style.backgroundColor = "white";
});

//Zadanie 7

const buttons = document.querySelectorAll("#calculator button");
const input = document.querySelector("#calculator input");

let calculation = "";

buttons.forEach( item => {
    item.addEventListener("click", () => {
        calculation += item.textContent;
        console.log(calculation);
        input.value = calculation;
    })
})

window.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        input.value = eval(calculation);
    }
})

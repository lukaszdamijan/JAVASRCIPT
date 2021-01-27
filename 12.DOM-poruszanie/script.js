//Zadanie 1
const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

//1.1
console.log(buz.parentElement);
//1.2
console.log(baz.previousElementSibling);
//1.3
console.log(foo.children);
//1.4
console.log(foo.parentNode);
//1.5
console.log(foo.firstChild);
//1.6
console.log(foo.children[Math.floor(foo.children.length / 2)]);

//Zadanie 2

const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

//Zadanie 3

const add = (elements) => {
    for(var i = 0; i < elements.length; i++){
       
        elements[i].addEventListener("click", function(){
            this.nextElementSibling.style.display = "block";
        })
   }
}

add(document.querySelectorAll('#ex3 button'));

//Zadanie 4

function changeColor() { 
let buttons = document.querySelectorAll('#ex3 button');
buttons.forEach(element => { 
element.addEventListener('click', () => {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
element.parentElement.style.backgroundColor = randomColor;
})})
}

changeColor();

//Zadanie 5

function changeBCForFirstChild(selector) {
  const ex5 = document.getElementById("ex5");
  const rectangles = ex5.children;

  function onMouseMove(selector, backgroundColor) {
    const liElements = document.querySelectorAll(selector);
    for (let i = 0; i < liElements.length; i++) {
      liElements[i].style.backgroundColor = backgroundColor;
    }
  }

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].addEventListener(
      "mouseover",
      function () {
        let backgroundColor = rectangles[i].style.backgroundColor;
        onMouseMove(selector, backgroundColor);
      },
      false
    );
    rectangles[i].addEventListener(
      "mouseout",
      function () {
        onMouseMove(selector, "white");
      },
      false
    );
  }
}

//1
changeBCForFirstChild("#ex5 > ul > li:first-child");

//2
changeBCForFirstChild("#ex5 > ul > li:last-child");

//3
changeBCForFirstChild("#ex5 > ul > li:nth-child(even)");

// 4
changeBCForFirstChild("#ex5 > ul > li");

//5
changeBCForFirstChild("#ex5 > ul");

//Zadanie 6

var ex6 = document.getElementById("ex6");

var first = ex6.firstChild.firstChild.firstChild;
var second = ex6.firstChild.parentElement.firstChild.firstChild.nextSibling.parentElement;
var thrid = ex6.parentElement.firstChild.parentElement.childNodes[1].firstChild.firstChild.firstChild;

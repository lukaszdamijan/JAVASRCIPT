//Zadanie 1

const moreDivs = document.querySelectorAll('.more-divs');

function myFunc(paramArray) {
    let newArray = [];
    for(let i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName)
    }
    return newArray;
}

console.log(myFunc(moreDivs));

//Zadanie 2

const shortList = document.querySelector(".short-list");

function displayDetails(item) {
//2.1    
    console.log(item.innerHTML);
//2.2    
    console.log(item.outerHTML);
//2.3    
    console.log(item.className);
//2.4    
    console.log(item.classList);
//2.5    
    console.log(item.dataset);
}

displayDetails(shortList)

//Zadanie 3

var sumAndSub = (element) => {
    var num1 = parseInt(element.dataset.numberone);
    var num2 = parseInt(element.dataset.numbertwo);
    var num3 = parseInt(element.dataset.numberThree);
    var sum = num1 + num2 + num3;
    var sub = num1 - num2 - num3;
    return [sum,sub];
};
console.log(sumAndSub(document.querySelector('#datasetCheck')));

//Zadanie 4

document.getElementById('spanText').innerText = 'dowolny';

//Zadanie 5

document.getElementById('spanText').className = 'dowolna';

//Zadanie 6

var table = document.getElementById("classes");
function takeclass(classList) {
    console.log(classList)
    let newArray = [];
    for(var i=0; i<classList.length; i++)
        {
            console.log(classList[i]);
            newArray.push(classList[i]);
        }
        
        console.log(newArray.join(" + "));
    
    
    table.className = '';
    
    console.log('Usunięto wszystkie klasy');
    
}

takeclass(table.classList)

//Zadanie 7

const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })

}
const result = addAttributes(list);

//Zadanie 8

function saveStringToObj(string) {
  const obj = {
    newClass: string
  }
  return obj;
}

function addNewClassToDiv(obj) {
  const newClass = obj.newClass;
  document.getElementById('myDiv').classList.add(newClass);
}

addNewClassToDiv(saveStringToObj('string_z_parametru'));

//Zadanie 9

function addEvenOddClass(number) {
  const newClass = number % 2 === 0 
    ? 'even'
    : 'odd';
  console.log(number, newClass);
  document.getElementById('numbers').classList.add(newClass);
}

addEvenOddClass(Math.floor(Math.random() * 11));

//Zadanie 10

const list = document.querySelector('#longList');

function getList(elements) {
    let text = [];
    elements.querySelectorAll("li").forEach((element) => {
        text.push(element.innerText);
    });
}

console.log(getList(list));

//Zadanie 11

const list = document.querySelectorAll("#longList li");

const changeDataAndSetValues(elements){
    elements.forEach(   element => {
        element.dataset.oldValue = element.innerHTML;
        element.innerHTML = Math.floor(Math.random() * 10)
    })
}

changeDataAndSetValues(list);

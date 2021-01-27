//Zadanie 1

var listElements = document.querySelectorAll(".list");

console.log(listElements);

//Zadanie 2

let returnElements = (tag) => {
    return document.querySelectorAll(tag);
}

console.log(returnElements("body"));

//Zadanie 3

const listElement = document.querySelector('#list');

console.log(listElement);

//Zadanie 4

const getElements = (selector) => {
    return document.querySelectorAll(selector);
}
const elementyLi = getElements('li');
const elementyUl = getElements('ul');
const elementySpan = getElements('span');
const elementySpan2 = getElements('div.list span');
const elementySpan3 = getElements('div#spans span');

console.log(elementyLi, elementyUl, elementySpan, elementySpan2, elementySpan3);

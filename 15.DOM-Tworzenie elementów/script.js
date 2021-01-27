//Zadanie 1

const el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);

//Zadanie 2

const favFruits = ['ogórek', 'liczi', 'mango', 'banan', 'borówki', 'pomarańcza', 'awokado'];
const ul = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
});
document.body.appendChild(ul);

//Zadanie 3

ul.addEventListener("click", () => {
    ul.querySelectorAll("li:nth-of-type(odd)").forEach( item => {
        item.remove();
    })
})

//Zadanie 4

const button = document.createElement("button");
button.innerHTML = "delete";
document.body.appendChild(button);

button.addEventListener("click", e => {
    e.target.remove();
})

//Zadanie 5

const randomNumber = Math.floor(Math.random() * 15);
for (let i = 0; i < randomNumber; i++) {
    const randomDiv = document.createElement("div");
    randomDiv.innerText = "to jest div numer: " + i;
    document.body.appendChild(randomDiv);
}

//Zadanie 6

const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span' };
function htmlFromObj(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlFromObj(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}

htmlFromObj(object);

//Zadanie 7

const favFruits = ['ogórek', 'liczi', 'mango', 'banan', 'borówki', 'pomarańcza', 'awokado'];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul1.appendChild(li);
});

const lists = [ul1, ul2];
const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
    lists.forEach((ul, i) => {
        if (ul.childElementCount <= 1) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

lists.forEach((ul, i) => {
    buttons[i].innerText = 'MOVE';
    buttons[i].addEventListener('click', () => {
        const listItems = ul.querySelectorAll('li');
        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();

//Zadanie 8

const form = document.createElement("form");
const input = document.createElement("input");
const br1 = document.createElement("br");
const span = document.createElement("span")
const br2 = document.createElement('br');
const button = document.createElement("button");

const spantext = "element type, text color, how many elements"; 
const buttonText = "Utwórz";

form.appendChild(span);
form.appendChild(br1);
form.appendChild(input);
form.appendChild(br2);
form.appendChild(button);
document.body.appendChild(form);

span.textContent = spantext;
button.textContent = buttonText;

button.addEventListener("click", e => {
    e.preventDefault();

    const inputValue = input.value;
    const elements = inputValue.split(' ');
    console.log(elements)
    for (let i = 0; i < elements[0]; i++) {
        const element = document.createElement(elements[3]);
        element.textContent = elements[1];
        element.style.color = elements[2];
        document.body.appendChild(element);
        
    }
})

//Zadanie 11

function extarctNumbersAndMultiplyToDivs(str) {
    const numbers = str.match(/[0-9]+/g);
    if (numbers.length > 0) {
        console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

        const mmultiplier = numbers.reduce((a, b) => Number(a) * Number(b));

        for (let i = 0; i < mmultiplier; i++) {
            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}

//Zadanie 12

function createObj(str) {
    return {
        string: str
    }
}

const alaStr = createObj('Ala ma kota');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

//Zadanie 13

const exampleArray = ["plum1", "plim2"];

function sumLettersInString(value){
    let numbers = 0;

    value.forEach(item => {
        const textWithoutNumbers = item.replace(/\d+/g, "");
        numbers += textWithoutNumbers.length;
    })

    console.log(numbers);
}

sumLettersInString(exampleArray);

function sumNumbers(value){
    let sum = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {
            sum+=(Number(number));
        })
        
    })
    console.log(sum);
}

sumNumbers(exampleArray)

function averageNumbers(value){
    let sum = 0;
    let letters = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {
            sum+=(Number(number));
            letters = number.length;
        })
        
    })

    const average = sum/letters;
    console.log(average);
    return average;
    
}

averageNumbers(exampleArray)
alaStr.alaToOla();

//Zadanie 14

function createObject() {
    return {
        name: '',
        surname: '',
        age: '',
    };
}

let personObject = createObject();

function setPersonData(name, surname, age) {
    personObject.name = name;
    personObject.surname = surname;
    personObject.age = age;

    personObject.nameLength = name.length;
    personObject.surnameLength = surname.length;
    personObject.ageLength = age.length;

    if (personObject.nameLength > 5 || personObject.surnameLength > 5 || personObject.age > 5) {
        const defaultObjectBtn = document.createElement('button');
        defaultObjectBtn.innerText = 'Przywróc obiekt do stanu pierwotnego';
        document.body.append(defaultObjectBtn, document.getElementById('root'));

        defaultObjectBtn.addEventListener('click', () => {
            personObject = createObject();

            console.log(personObject);
        })
    }

    console.log(personObject);
}

setPersonData('Robert', 'Witek', 22);
setPersonData('Lukasz', 'Kowalski', 50);

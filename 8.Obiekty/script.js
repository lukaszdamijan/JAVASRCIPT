//Zadanie 1

const car = {
    color: 'red',
    wheels: 4,
    model: 'Citroen'
}

for (const [key] of Object.entries(car)) {
    console.log(car[key]);
}

//Zadanie 2

const car = {
    color: 'red',
    wheels: 4,
    name: 'Citroen',
    changeName: function (newName) {
        this.name = newName;
    }
}

car.changeName('Mazda');
console.log(car);

//Zadanie 3

function sumObject(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumObj = new sumObject([1, 2, 3, 4]);

console.log(sumObj.sum);

//Zadanie 4

const car = {
    model: 'BMW',
    age: 12,
    color: 'Black ofc'
}

for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

//Zadanie 5

const car = {
    model: 'BMW',
    age: 12,
    color: 'Black ofc',
    owner: {
      name: 'Jacek',
      age: 32
    }
}

for (const [key, value] of Object.entries(car.owner)) {
    console.log(`${key}: ${value}`);
}

//Zadanie 6
const car = {
    model: 'BMW',
    age: 12,
    color: 'Black ofc',
    owner: {
      name: 'Jacek',
      age: 32
    }
}

car.engine = 1.2;
car.honk = () => {
  console.log('hello');
}
car.honk();

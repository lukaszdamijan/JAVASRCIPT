// Zadanie 1

class Person {
  constructor(imie, nazwisko, wiek, kraj, miasto) {
    Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
  }

  printInfo() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }

  addYearToAge() {
    this.wiek++;
  }

}

const person1 = new Person('Jacek', 'Kowalski', 15, 'Polska', 'Warszawa');
const person2 = new Person('Vito', 'Scalleta', 31, 'Włochy', 'Rzym');

person1.printInfo();
person1.addYearToAge();
person1.printInfo();

//Zadanie 3

function Calculator(a,b) {
    this.a = a;
    this.b = b;
    this.add = function () {
        return this.a + this.b;
    }
    this.substract = function () {
        return this.a - this.b;
    }
    this.divide = function () {
        if (this.b === 0) return "cannot divide by 0";
        return this.a / this.b;
    }
    this.multiply = function () {
        return this.a * this.b
    }
}

const calculator = new Calculator(3,1);
console.log(calculator.add());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.substract());

//Zadanie 4

function Constructor(){
    this.number = 0;
    
    this.up = function() {
        this.number++;
    }
    
    this.down = function() {
        if(this.number > 0){
            this.number--;
        }
        else{
            console.log("Jesteś na ziemi.");
        }        
    }
    
    this.showLevel = function() {
        console.log(this.number);
    }
}

var constructor = new Constructor();

constructor.showLevel();
constructor.up();
constructor.up();
constructor.showLevel();
constructor.down();
constructor.showLevel();

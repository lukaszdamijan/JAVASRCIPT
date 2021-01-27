//Zadanie 3

for(var x = 0; x<=10; x++)
    {
         console.log("Lubie JavaScript")
    }

//Zadanie 4

var result = 0;
for(var i=0;i<=10;++i){
    result=result+i;
}
console.log(result);

//Zadanie 5

var n = 5;
for(var i = 0; i<=n; i++)
    {
        if(i%2==0)
            {
                console.log("liczba " +i+ " jest parzysta");
            }
        else
            {
                console.log("liczba " +i+ " jest nie parzysta");
            }
   
       
    }

//Zadanie 6

for(let i=0; i< 5; i++){
    for(let j=0; j < 5; j++){
        console.log("i= " + i + ", j= " + j);
    }
    
}

//Zadanie 7 

console.log(0);
for(var i=1;i<=100;++i){

    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } 
    else if(i%3==0){
        console.log("Fizz");
    }
    else if (i%5==0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//Zadanie 8

//a
var x = '*';

for (var i=0;i<5;i++){
    console.log(x);
    x +='*';
}

//b
var x = ' *';
var z = 5;

for (var i=0;i<z;i++){
    var space = '';
    for (var k=0; k<z-i; k++){
        space += ' ';
    }
    console.log(space + x);
    x +=' *';
}

//c 
let star="*";
let space=" ";
var j=4;
var l=1;
for(var i=0; i<5; i++){

result1="";
result2="*";

  for(var k=j; k>0; k--){
   result1+=space;
}
j--;
for(var n=1; n<l; n++){
result2+=(star+star);
}
l++;
console.log(result1+result2);

}

//d
for (let x = 0; x < 5; x++) {
    var result = '';
    for (let y = 0; y < x + 1; y++) {
        result += star;
    }
    for (let z = 0; z < 5 - (x + 1); z++) {
        result += (z + 1);
    }
    console.log(result);
}


//e
let star = ' *';

for (let x = 0; x < 5; x++) {
    var result = '';
    for (y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for (z = 0; z < x + 1; z++) {
        result += star;
    }
    console.log(result);
}
for (let x = 0; x < 3; x++) {
    var result = '';
    for (y = 0; y < 5; y++) {
        result += ' ';
    }
    result += star;
    console.log(result);
}

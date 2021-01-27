//Zadanie 1

let table = [1, 2, 3, 4];
console.log(table)

//Zadanie 2
const table = ['jeden', 2 , 3 , 4]

console.log(table[0])
console.log(table[table.length -1])
console.log(table)

for(i=0;i<table.length; i++){ 
    
    if(i % 2 === 0){
        console.log(table[i])
    }
    
}
    
for(i = 0; i < table.length; i++){
    if(typeof table[i] == "string")
        console.log(table[i])
}

for(i=0; i < table.length; i++){
    if(typeof table[i] == "number")
        console.log(table[i])
}


//Zadanie 3

var table = new Array(1,2,3,4,5);
var sum = 0;


table.forEach(item => {
    sum += item;
})

var average;
average = sum / table.length;

sum = 0;
table.forEach(item => {
    sum -= item;
})

table.forEach(item => {
    if (item %2 == 0) {
        console.log(item);
    }
})

table.forEach(item => {
   if (item %2 != 0) {
       console.log(item);
   } 
});

var max = table[0];
table.forEach(item => {
   if (item > max) max = item; 
});
console.log(max);

var min = table[0];
table.forEach(item => {
   if (item < min) min = item; 
});
console.log(min);

for(var i = table.length; i < 0; i--) {
    console.log(table[i]);
}

//Zadanie 4

function myTable(paramTable){
    let result = 0;
    for(i=0; i<paramTable.length; i++){

        result = result + paramTable[i];
    }
    console.log(result)
};

myTable([1,2,3,4]);

//Zadanie 5

function myTable(paramTable){
  var sum = 0;
  for(i=0; i<paramTable.length; i++){
    sum = sum + paramTable[i];
    }
  var average = sum /paramTable.lenght;
  
  for(i=0, i<paramTable.length, i++){
    console.log(paramTable[i]*average);
};

myTable([1,2,3,4]);
  
//Zadanie 6
  
  myTable([1,2,3,4]);

function myTable(paramTable){
    var sum =0;
    var length = 0;
    for (i=0; i<paramTable.length; i++){
        if(paramTable[i] % 2 == 0){
            
            sum = sum + paramTable[i];
            length++;
        }
            
    }
    let avg = sum / length;
    console.log(avg)
};
  
//Zadanie 7

const nums = [2, 7, 5, 34, 1, 65];
function compareNumbers(a, b) {
    return a - b;
}
console.log(nums.sort(compareNumbers));

//Zadanie 8

var firstArray = [1, 2, 3, 1, 2, 2];
var secondArray = [2, 2, 2, 2];

function sumArrayIndexes(array1, array2) {
    var sumArray = 0;

    array1.forEach((value, index) => sumArray += index);
    array2.forEach((value, index) => sumArray += index);

    return sumArray;
} 
  
//Zadanie 9

  function reserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reserveSing([1,2,3,4,6,-6]));

//Zadanie 1

var x = 0;
var n = setInterval(() => {
    if(x == 15)
        {
            clearInterval(n);
        }
       console.log("Cześć po raz "+ x++)
}, 1000);

//Zadanie 2

let tab = ["Maciek", "Jakub", "Aleksandra"]; 
setTimeout(function() {
for (let i=0; i<tab.length; i++) {
    console.log(tab[i]);
}
i = 0;
setInterval(function() {
  
    if(tab.length>i) {
    console.log(tab[i++]);
}
}, 3000);
  
}, 2000);

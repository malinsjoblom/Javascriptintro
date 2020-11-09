//fråga user att man in 2 siffror

//vi kommer att visa summan av de 2 siffrorna 
//användare har matat in


/*
//fråga användare? //vi ska använda prompt istället för form/input
// lagra info/data : i var "name" // string
// konvertera till int
//plussa dom
// tar vi inte emot någon minus siffra
// visa till användare

var number1= prompt("Mata in en siffra");
var number2= prompt("Mata in andra siffran");

var convertedNumber1= Number(number1);
var convertedNumber2= Number(number2);

//plussa dom
var summan= convertedNumber1 + convertedNumber2

alert(summan);
*/


//program2: ta in betygsinfo från användare och
// lagra in i en lista-

/*
var fysikBetygsGrad = prompt("mata in fysiks betyg");
var matteBetygsGrad = prompt("mata in mattes betyg");
var webBetygsGrad = prompt("mata in webs betyg");
var historiaBetygsGrad = prompt("mata in historias betyg");
var kemiBetygsGrad = prompt("mata in kemis betyg");

//vi ska inte ta något betyg som är mindre än 2
if(fysikBetygsGrad >=2)

{
    var betygsLista = [
        fysikBetygsGrad
    ]
    alert ("Grattis" + betygsLista) 
}


//varje if statement körs/översätts av maskin
// else if körs bara om ovanstående villkoret inte är sant
/*if ( ) {
    
}


else if( false) {
alert ("hej, den här raden kommer att köras om ovanstående vilkkoret inte är sant")
}
*/
/*
else {
    alert ("betyget är för lågt")
}
*/


//nameGivingConvention: 
//var gradeInfoKemi= 5; liten bokstav, nästa ord stor bokstav


/*
conditional/vilkorsats:


//expression ?? : jämförelse : true/false ,
 age>18 , password== matatinPassword
if (true/false) { alla kod som finns inuti ska köras om villkoret är sant }
else if { om ovanstående if inte är sant }
else { om inget ovanstående villkoren är sant körs else }
*/

/*
== // när vi jämför två value men inte deras datatyper
=== // när vi jämför två value och deras datatyper

! not : true

!= // not lika med 
!==  // not lika med


< mindre än
> större än
<== mindre än och lika med
>==  större än och lika med
 

"50" ==50
true
"50" ===50
false
*/


/*uppgifter:
Skapa ett program där användare matar in 3 siffror och du visar multiplikation av 3 siffror
 
Subtration sista tvp siffror från första siffran
till ex. första siffran är 10, substrahera sista två siffrorna 2,4
  
  */


//fråga användare? //vi ska använda prompt istället för form/input
// lagra info/data : i var "name" // string
// konvertera till int
//plussa dom
// tar vi inte emot någon minus siffra
// visa till användare
/*
var number1= prompt("Mata in en siffra");
var number2= prompt("Mata in andra siffran");
var number3= prompt ("Mata in tredje siffran")

var convertedNumber1= Number(number1);
var convertedNumber2= Number(number2);
var convertedNumber3= Number (number3);

//plussa dom
var summan= convertedNumber1 - convertedNumber2 - convertedNumber3

alert(summan);

*/
/*
var h1 = document.querySelector("h1")

function collectData () 
var inputData =document.querySelector("#text").value;




const btn= document.querySelector("button")

btn.addEventListener("click", collectData)

//click, submit, change, load

console.log(inputData)
//h1.innerText="hello"

/*
//event
//function : function () {//task funktionen gör}
// event listner : lyssnar på någon event och när event händer anropar den

var listsa = [1, 3, 5, 100, 200]
listsa.length // visar hur många items som finns in i en lista
listsa.push("nytt värde")

* Object
key:value
var personObject = {name : "some name" , more : "more data", profession : "IT tekniker"}
personObject.name // some name

// lägga till data i object 
// objectnamn.newKeyName = "new value"
personObject.profession = "IT tekniker"
*/
/*
//for loop: 

for( startpunkt; vilkor; ökning/minskning)

{
    //kodrader som skulle köras om vilkoret är sant
    // { kod raderna här kommer att köras så länge villkoret är sant}
    for (var i = 0; i<10; i++) {
        
        console.log(i)
     }

     var i = 0;
     i = i+1;
     //samma men förenklat nedan
    // i++ | i+= 1
}


//lista.length 10; 9
var lista= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// visa udda tal från den här listan
for (var i= 0; i<lista.length; i++) //(i+=2) du får ojämna tal
{
    console.log( lista[i]) //i+1 ojämna tal

    //hur vi kan visa value från array?
    lista [0] 
}
*/
//uppgiften: Se till att ni har formulär, eller två input
//skapa en funktion som kollar upp användare
// lösenord och upprepande lösenord är samma
// till ex. två input fält, en kommer att ta in lösenord,
//upprepande lösenord

//om lösenordet inte matchar visar den felmeddelande
// när lösenordet matchar visar den succé // div 
//visa udda tal från listan


var button = document.querySelector("button");
 
button.addEventListener("click", compare);
 
function compare() {
 
 // läsa input fältena
 var passWord = document.querySelector("#password").value;
 var passWordCheck = document.querySelector("#passwordCheck").value;
 
 console.log("testa")
 //jämför // compare
 
 if (passWord == passWordCheck) {
 alert("password matches");
 } 
 
 else {
 
 alert("password mismatch, please enter again");
 }
 
}
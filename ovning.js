//Uppgift 2 - ojämna tal

var lista= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for(var i=0; i< lista.length; i+=2)

{

console.log(lista[i+1] )

}


//Uppgift 2 - jämna

var lista= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for(var i=0; i< lista.length; i+=2)

{

console.log(lista[i+2] )

}


// Uppgift 3

var lista= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(var i=0; i< lista.length; i+=1)

{

console.log(lista[i] )

}

//Uppgift 4 

function countSalary(fastlön, rörliglön) {
    var slutlön = fastlön + rörliglön
    console.log(slutlön)

    return slutlön

    var lön =document.querySelector("#lön")
    lön.innerText = "Slutlön"
}

undefined 

countSalary (1000, 2000) 
svar: 3000



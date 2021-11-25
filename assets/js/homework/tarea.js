
var d =prompt("dia de la semana","")
switch(d){
    case "domingo":
        console.log("1")
        break
    case "lunes":
        console.log("2")
        break
    case "martes":
        console.log("3")
        break
    case "miercoles":
        console.log("4")
        break
    case "jueves":
        console.log("5")
        break
    case "viernes":
        console.log("6")
        break
    case "sabado":
        console.log("7")
        break             
}


var numero = parseInt(prompt("numero",0))
while (isNaN(numero)){
    numero = parseInt(prompt("digite el numero", 0))
} if(numero%2==0){
    console.log("el numero es par")
} else {
    console.log("el numero es impar")
}


var a = prompt("dame el valor 1", 0)
var b = prompt("dame el valor 2", 0)
if (a>b){
    console.log("el numero: ", a , "es mayor que", b)
} else {
    console.log("el numero: ", b , "es mayor que", a)
}

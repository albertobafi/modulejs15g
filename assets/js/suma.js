// Pedir el usuario 1 numero entre 1 y 100
// sumar todos los numeros entre el 1 y este numero
// Mandar un alert con el  total

// 10
// 1+2+3+4+5+6+7+8+9+10
// total -> ?

let a= prompt("introduzca el numero a tratar entre 1 y 100: ", 0)
let r=0
if (isNaN(a)!= true && a>0 && a<=100){
    for(let i=1; i<=a ;i++){
    r+=i
}
alert(`la suma es ${r}`)
} else{
console.error(`dame un numero entre 1 y 100`)
}


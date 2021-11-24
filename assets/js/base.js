/* 
    Ejercicio 1:
    Pedir 2 variables por prompt
    Si a > b dividir entre b
    Si a < b sumar a más b
    Si a == b multiplicar ambos numeros
    Imprimir el resultado en consola
*/

const a = parseInt(prompt("dame un valor de A: "))
const b = parseInt(prompt("dame un valor de B: "))
console.log(isNaN(a), isNaN(b))

if (isNaN(a) === false && isNaN(b) === false){
    if (a > b){
        console.log(a / b)
    } else if (a < b){
        console.log(a + b)
    } else {
        console.log(a * b)
    }
}else {
    console.error("Algunos de los datos proporcionados no son de tipo numerico")
} 
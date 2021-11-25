// - Estar en la rama de la clase
// - En el archivo weather.js
// - Pedir al usuario que ingrese como esta el clima
// en su ciudad
// --Opciones
// ---Soleado
// ---Lluvioso
// ---Nevando
// ---Nublado
// -Pedir la temperatura aproximada en ºC
// -Imprimir en consola un descripción 
//acorde al estado del día y la temperatura de ºF
// --P.ej: En tu ciudad, el día está "Soleado" 
//con una temperatura de 100ºF

var a = prompt("¿como esta el clima? (elige entre: soleado, lluvioso, nevando, nublado)", "")
var c = prompt("Ingresa la temperatura en grados celsius", 0)
var f = 0
f=(c*9/5)+32
switch (a){
    case "soleado":
        console.log("dia soleado con una temperatura en grados farenheit de:", f)
        break
    case "lluvioso":
        console.log("dia lluvioso con una temperatura en grados farenheit de:", f)
        break
    case "nevando":
        console.log("dia nevado con una temperatura en grados farenheit de:", f)
        break
    case "nublado":
        console.log("dia nublado con una temperatura en grados farenheit de:", f)
        break
}

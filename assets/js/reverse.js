function stringToreverse(s){
return s.split("").reverse().join("")
}

var sss = prompt("introduce un nombre: ")
sss=stringToreverse(sss)
console.log(sss)
// split() separará cada carácter de una 
// cadena y lo convertirá en un array.
// reverse() tomará esa matriz e invertirá 
// los elementos dentro de ella.
// join() unirá los caracteres que han sido
//  invertidos por la función reverse().

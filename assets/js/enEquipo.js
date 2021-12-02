// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, 
// siendo N un numero entre 1 y 100

// function sumar(a,b=10,suma=0) {
//     if (!isNaN(a) && a > 0 &&  a <= 100 || !isNaN(b) && b> 0 &&  b <= 100 ) {
//         for( a; a <= b; a++){
//             suma += a
//         }
//     }  
//     else {
// 		console.log('No es un numero valido')
// 	} 
//     console.log(suma)
// }

// sumar (5,7)

const sumar = (a,b=10,suma=0) => {
    if (!isNaN(a) && a > 0 &&  a <= 100 || !isNaN(b) && b> 0 &&  b <= 100 ) {
        for( a; a <= b; a++){
            suma += a
        }
    }  
    else {
		console.log('No es un numero valido')
	} 
    console.log(suma)
}

sumar (5,6)


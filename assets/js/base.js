// Object.keys(obj)
let salarios  = {
    'jorge':  3000,
    'juan':  3000,
    'Pedro':  3000
}
let empleados = []
for( item in salarios){
    empleados.push(item)
}

console.log( Object.keys(salarios) )

// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach
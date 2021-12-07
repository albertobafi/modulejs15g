// objects

// let carObject = {
//     modelo: 'jetta',
//     marca: 'vw',
//     color: 'rojo',
//     year: 2020,
//     tenencias: [2019, 2020, 2021]
// }

// console.log(carObject)
// console.log(carObject.tenencias [2])

// objeto koder
// let koder = {
//     generation: '15g',
//     name: 'Alberto',
//     lastName: 'Barragan',
//     age: 28,
//     experience: 'no',
//     module: ['js', 'maquetado', 'react']
// }
// koder.isMentor = true
// koder.modulos = ['js', 'node js', 'cloud']
// console.log(koder.isMentor)
// console.log(koder.generation)
// console.log(koder.name.toLocaleUpperCase())

// expected output
//list with number
// let koder = {
//     generation: '15g',
//     name: 'Alberto',
//     lastName: 'Barragan',
//     age: 28,
//     experience: 'no',
//     module: ['js', 'maquetado', 'react']
// }
// let counter=1
// for (const property in koder) {
//         console.log(`${counter}. ${property}: ${koder[property]}`)
//         counter++  
// }

//ejercicios
/**
 * contar el numero de empleados
 * suma total a pagar
 * son # empleados y el total es #
 */
// let salaries = {
//     'juan':20000,
//     'albert': 50000,
//     'jorge': 45000
// }
// let counter=0
// let sal=0
// for(const property in salaries){
//     counter++
//     sal += salaries[property]
// }
// console.log(`son ${counter} y el total es ${sal}`)

/**
 * arrow function.
 * recibir un objeto.
 * devolver un array con todas
 * las propiedades que son un string.
 * entrada: objOnlyStrings
 * [modelo, marca, color, version, origen]
 */

// let objOnlyStrings = {
//     modelo: 'jetta',
//     marca: 'vw',
//     color: 'rojo',
//     year: 2020,
//     tenencias: [2019, 2020, 2021],
//     version: 'sport',
//     origen: 'Mexico'
// }

// const filterStringObject = (obj)=>{
//     let result =[]
//     for(const key in obj){
//         if (typeof obj[key]==='string'){
//             result.push(key)
//         }
//     }
//     return result
// }

// console.log(filterStringObject(objOnlyStrings))


/**
 * 1. Declarar una funcion que reciba un objeto
2. Declarar un array vacio
3. iterar el objeto ( for in )
4. -- En cada iteracion 
5. ----- Obtener el valor de cada llave
6. ----- Verificar si es un string
7. ----- sí si, Agregar al array
8. -- fin iteracion
9. retornar el array 
 */

// Array de objetos
let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

koders.forEach((element, index, array) => {
    // console.log(element.lastName)
    // console.log(element.age)
    // console.log(element.generation)
    // console.log(element.modulos)
    console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
})

/**
 * 1. Hacer una funcion que reciba un objeto de koders
 * 2. Obtener la suma de todas las edades
 * 3. Retornar el total
 * hint: .forEach() .reduce()
 */

/* 
tipos de datos:

    primitivos:
      number
      string
      boolean
      undefined
      null
      bigInt

    compuestos o complejos:
      objetos
*/

// Primitivos

// number
let numero = 12
console.log(typeof numero)
console.log(typeof 1.6, 1.6)

//NaN = not is a number = esto no es un numero
console.log(12 * 'a')
console.log(13 / -0)

// String
let name = 'Kai'
console.log(typeof name)
console.log(typeof '12')

// Boolean
console.log(typeof true)
console.log(typeof false)

// Undefined
/* este tipo de dato da cuando algo esta declarado pero no 
tiene un valor asignado
*/
let x
console.log(typeof x)

//null
/*
Es cuando algo no existe o cuando el programador se lo asigna
a una variable.
 */
let a = null
console.log(null)
console.log(a)

// COMPUESTOS

// objetos
/* 
es un objeto que tiene propiedades y metodos.
*/
let persona = {
  nombre: 'Ali',
  apellido: 'Muñoz'
}
console.log(persona)
console.log(persona.nombre)
console.log(typeof persona)

// arrays
/* 
Los arrays son una lista de elementos.
*/
let array = [1, 'hola', true]
console.log(array)
console.log(array[2])
console.log(typeof array)
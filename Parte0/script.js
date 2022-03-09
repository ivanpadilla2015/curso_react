console.log("Hola Mundo")

let firstName = "Miguel"
const lastname = 4
var isDeveloper = true

console.log(firstName)
firstName = "julio"
console.log(firstName)
/*lastname = 5
console.log(lastname)*/

const person = {
    name : "Ivan Padilla",
    twitter : "@ivancho",
    link: ["http//lapropia.com", "ereselmejor.com"],
    edad: 45,
    isDeveloper:true
}

const field = 'twitter'

console.log(person.name)
console.log(person.link[0])

console.log(person[field])
// una expresion de funcion sumar

const sumar = (operando1,operando2)=> {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}
//una cosa son los parametros operando1 y otra son los argumentos 3, 5

console.log(sumar(3,5))

// una declaracion
function restar(v1, v2){

    return v1 - v2

}
console.log(restar(6,2))
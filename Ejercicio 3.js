//Array
function paso (){
    console.log("----------")
}

let array = [0,1,2,3,4,5,6] // arreglo o vector
console.log(array)

let objeto = { // objetos 
    nombre: 'Nicolas',
    apellido: 'Granados',
    edad: 22
}
console.log("Mi nombre es: ", objeto.nombre, "Y mi edad es:", objeto.edad)


paso()
console.log("Ciclo While")
paso()

// ciclo whie

let contador = 0
let N = 50
while (contador <= N){
    console.log(contador)
    contador++
}


// el for es el de toda la vida
paso()
console.log("Ciclo FOR")
paso()
for(let i=0;i<10;i++){
    console.log(i)
}

// for of y for in

paso()
console.log("FOR of y FOR in")
paso()

let array2 = [10,20,30]
let estudiantes = [
    {
        nombre: 'Estudiante 1',
        nota: 5
    },
    {
        nombre: 'Estudiante 2',
        nota: 6
    },
    {
        nombre: 'Estudiante 3',
        nota: 1
    }
]
// forma normal
for(let i=0;i<estudiantes.length;i++){
   console.log(estudiantes[i].nombre, estudiantes[i].nota)
}
paso()
//esta echo para vectores 
for (let estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota)
}




/*
*Const
*Let
*/ 

// var variable  /* bool string int*/
// // Código
// var variable1
// //Código1
// var variable2
// /* Al momento de compitar, TODAS se declaran en el inicio del programa*/ 
// let variablelet = 0
// variablelet = "Nuevo valor de variable Let"
// console.log(variablelet)
// const variablecont = 0

//Diferencias enter const y Let
//let se puede cambiar el valor de la variable cuando se desa
// Const (es una constante) por lo cual no se puede cambiar o reasignar el valor

// const deja mutar o cambiar propiedades, lo que no deja hacer esc reasignar

function rellen(){
    console.log("-------------")
}


//fat arrow funtions

function fn1(a,b){
return a+b
}
const resultado = fn1(1,2)
console.log(resultado)

const fn2=(a,b) =>{ 
    return a+b} 

const resultado2 = fn2 (1,2)
console.log(resultado2)

rellen()
// Objet Destructuring

const servicios = {
    api: {},
    mailler:'Soy Mailer',
    apollo: {}
}

const enviarCorreo = (srs) => { // se puede asiganr mailler directamente en "(srs)"
    const { mailler} = srs
    console.log(mailler)
// redactar código para que se pueda enviar correo
}

enviarCorreo(servicios)

// array spreed operator

const arr =[1,2]
const suma = (a,b) => a+b
const resultado3 = suma (arr[0],arr[1]) // primera forma de pasar los argumentos
const resultado4 = suma (... arr) // lo que hacen los "..." es entregar [1] como primer argumento y [2] como segundo y así hasta n
console.log(resultado3)
console.log(resultado4)
rellen()
//arr.push(3)
console.log(arr)
rellen()

const arr2 = [...arr] // se agegra sin modificar el primero
arr.push(3)
console.log(arr2)

rellen()

// Objet spread operator

const obj = {
    a:1,
    b:2,
}

const obj1 ={
    data:{
        ...obj, // lo que se hace es lo "mismo" que en la anterior se copia lo de obj
    }   
}
obj1 ['c'] = 3
console.log(obj,obj1)

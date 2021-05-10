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
const usuario = {
    nombre: 'Luis',
    email: 'luis@gmail.com',
    edad: 23
}

let entradas = Object.entries(usuario);

//console.log(entradas);

//let valores = Object.values(usuario)

//console.log(valores);

let keys = Object.keys(usuario)

//
//console.log(keys);

//onst suma = [10, 20, 30,20].reduce(function(a,b){ return a + b } )
//console.log(suma);

const impuestos = {
    iva: 32,
    iibb: 50,
    otro: 23
}

const valores = Object.values(impuestos)

const suma = valores.reduce(function(a,b){ return a +b})

console.log(suma);
const persona1 = {
    nombre: 'Juan',
    email: 'juan@gmail.com',
    edad: 42
}

//spread

let { nombre, email } = persona1;

//console.log(persona1.nombre);
//console.log(nombre);

let persona2 = {...persona1};


persona2.email = 'pedro@gmail.com'

console.log(persona1);//juan@gmail.com
console.log(persona2);//pedro@gmail.com
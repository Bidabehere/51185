/* const persona1 = {
    nombre: 'Pedro',
    email: 'pedro@gmail.com',
    //edad: 
}

console.log(persona1?.edad || 0); */

class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad
    }

    static mayorEdad = 18;
    //#mayorEdad = 18;

    obtenerNombre(){
        return this.nombre;
    }
    esMayor(){
        return  parseInt(this.edad) >= parseInt(Persona.mayorEdad)
    }
}

const Luis = new Persona('Luis', 19)

//console.log(Luis.obtenerNombre());
console.log(Luis.esMayor());
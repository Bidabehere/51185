class Persona{
    constructor (nombre, apellido, edad, ciudad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad
    }
    static saludo = 'Hola';
    saludar(){
        console.log(`${Persona.saludo} soy `);
    }
    minombre(){
        console.log(`${this.nombre} ${this.apellido}`);
    }
}

let Juan = new Persona('Juan', 'Bidabehere', 42, 'San Fernando')
let Pedro = new Persona('Pedro', 'Lopez', 28, 'Tigre')

Juan.minombre();
Pedro.minombre()


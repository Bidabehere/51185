class Contador{

    constructor(nombre){
        this.nombre = nombre;
        this.cuentaIndividual = 0;
        Contador.contadorGlobal++
    }
    static contadorGlobal = 0;
    
    getResponsable(){
        return this.nombre;
    }
    getCuentaIndividual(){
        return this.cuentaIndividual;
    }
    getCuentaGlobal(){
        return Contador.contadorGlobal;
    }
    contar(){
        this.cuentaIndividual++;
        Contador.contadorGlobal++;
    }

}

const contadorJulio = new Contador('Julio'); G +1
const contadorLuis = new Contador('Luis'); 

contadorJulio.contar() 
console.log(contadorJulio.getCuentaGlobal());
console.log(contadorLuis.getCuentaGlobal());

console.log(contadorLuis.getCuentaIndividual());
console.log(contadorJulio.getCuentaIndividual());


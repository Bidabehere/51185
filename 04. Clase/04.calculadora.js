const sumar = (numero1, numero2) => numero1+numero2;
const restar = (numero1, numero2) => numero1-numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir =  (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (numero1, numero2, callback) => {
    console.log('Realizo la operación que recibo!!');
    const resultado = callback(numero1,numero2) //Es la función que recibo!
    console.log(`El resultado de la operación enviada es: ${resultado}`)

}

//realizarOperacion(1,22, sumar)
//realizarOperacion(1,22, restar)

realizarOperacion(2,22, dividir)

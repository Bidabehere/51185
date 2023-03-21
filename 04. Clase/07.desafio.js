const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{
        if(divisor === 0){
            reject('No se puede dividir por 0')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

const suma = async (num1, num2) =>{
    return new Promise((resolve, reject)=>{
        if(num1 === 0 || num2 ===0){
            reject('Operación innecesaria')
        }
        if(num1+num2 < 0){
            reject('La calculadora solo debe devolver valores positivos')
        }
        const total = num1 + num2;
        resolve(total)
    })
}


const resta = async (num1, num2) =>{
    return new Promise((resolve, reject)=>{

        if(num1 === 0 || num2 ===0){
            reject('Operación invalida')
        }
        if(num1-num2 < 0){
            reject('Solo devuelve valores positivos')
        }
        const total = num1 - num2;
        resolve(total)
    })
}

const multi = async (num1, num2) =>{
    return new Promise((resolve, reject)=>{

        if(num1 < 0 || num2 < 0){
            reject('Operación invalida')
        }

        if(num1*num2 < 0){
            reject('Solo devuelve valores positivos')
        }
        const total = num1*num2;
        resolve(total)
    })
}



const calculo = async (valor1, valor2, opCallBack) =>{
    try {
        const resultado = await opCallBack(valor1, valor2)
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}
 
/* calculo(1,0,suma);
calculo(1,-21,suma);
calculo(1,2,suma); */

calculo(1,0,resta);
calculo(1,21,resta);
calculo(2,1,resta);


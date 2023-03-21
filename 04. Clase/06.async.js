function funA(){
    console.log(1);
    funB()
    console.log(2);
}
function funB(){
    console.log(3)
    funC()
    console.log(4)
}
function funC(){
    console.log(5)
}

//funA();

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{
        if(divisor === 0){
            reject('No se puede dividir por 0')
        }else{
            resolve(dividendo/divisor)
        }
    })
}
/* async function calculo(params) {
    
} */

const calculo = async () =>{

    try {
        const resultado = await dividir(10,0)
        console.log(resultado)
    } catch (error) {
        console.log('Paso por el error')
        console.log(error)
    }
}
 
calculo()
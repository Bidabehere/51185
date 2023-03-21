const valoresOriginales = [1,2,3,4,5]

//const nuevoArreglo = valoresOriginales.map( x => x*2)

//console.log(nuevoArreglo);

const funcionPar = (valor) => {
    if(valor%2 === 0){
        return valor;
    }else {
        return 'No es par'
    }
}

//const valoresPar = valoresOriginales.map(funcionPar)
//console.log(valoresPar);


function miFuncionMAP(arr, funcionCallback){
    const nuevoArreglo = [];
    for(let i = 0; i < arr.length; i++){
        let nuevoValor = funcionCallback(arr[i])
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}


//const valoresPar = miFuncionMAP(valoresOriginales,funcionPar)

//console.log(valoresPar);

Array.prototype.miMap = function(funcionCallback){

    const nuevoArreglo = [];
    for(let i = 0; i < this.length; i++){
        let nuevoValor = funcionCallback(this[i])
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

const valoresPar = valoresOriginales.miMap(funcionPar);

console.log(valoresPar);
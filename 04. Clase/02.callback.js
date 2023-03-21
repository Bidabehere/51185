

const contarLetras = (letras) => {
    let cantLetras = letras.trim().length;
    console.log(cantLetras)
}

const contarElementos = (arr) => {
    let cantElementos = arr.length;
    console.log(cantElementos)
}

function funcionDerivar(valor, callback){
    callback(valor)
}

let arr = [1,2,3,4,5];
let letras = ' PedroCamina ';

//funcionDerivar(arr,contarElementos)
funcionDerivar(letras,contarLetras);

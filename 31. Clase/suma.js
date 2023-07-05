let testPasados = 0;
let totalTest = 4;


const sumar = (...nums) =>{
    
    if(nums.length === 0) return 0
    if(nums.some(elm=> typeof elm !== "number")) return null;
    return nums.reduce((acc,i)=>acc+i,0)

    /* for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(typeof(num)!== "number"){
            return null
        }
    }
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total+=num;
    }
    return total; */
    
}


//Realizar las pruebas
//1.
console.log('----------------- Prueba 1 --------------------');
console.log(`La función debe devolver null si algún parámetro no es numérico.`)
let resultado1 = sumar(1,'2');
if(resultado1===null){
    console.log('--> Test 1 paso')
    testPasados++
}else{
    console.log('--> Test 1 No paso, se esperaba un resultado null, pero dio otra cosa.')
}
//2.
console.log('----------------- Prueba 2 --------------------');
console.log(`La función debe devolver 0 si no se pasó ningún parámetro`)
let resultado2 = sumar();
if(resultado2===0){
    console.log('--> Test 2 paso')
    testPasados++
}else{
    console.log('--> Test 2 No paso, porque se esperaba un resultado 0, pero dio otra cosa.')
}
//3.
console.log('----------------- Prueba 3 --------------------');
console.log(`La función debe poder realizar la suma correctamente.`)
let resultado3 = sumar(1,5)
if(resultado3 === 6){
    console.log('--> Test 3 paso')
    testPasados++
}else{
    console.log('--> Test 3 No paso, porque se esperaba un resultado 6, pero dio otra cosa.')
}

//4.
console.log('----------------- Prueba 4 --------------------');
console.log(`La función debe poder hacer la suma con cualquier cantidad de números.`)
let resultado4 = sumar(1,5,5,6)
if(resultado4 === 17){
    console.log('--> Test 4 paso')
    testPasados++
}else{
    console.log('--> Test 4 No paso, porque se esperaba un resultado 17, pero dio otra cosa.')
}

console.log('*************************');
if(testPasados=== totalTest){
    console.log('Todas las pruebas pasaron')
}else{
    console.log(`Numero de pruebas pasadas ${testPasados} de un total de ${totalTest}`)
}
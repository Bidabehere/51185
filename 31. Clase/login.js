//Una función de login (con usuarios hardcodeados user = coderUser , password = 123)
let testPasados = 0;
let totalTest = 5;




const login = (usuario, password) =>{
    if(!usuario) return 'No se ha proporcionado un usuario'
    if(!password) return 'No se ha proporcionado un password'
    if(password !== 123) return 'Contraseña incorrecta'
    if(usuario!== 'coderUser') return 'Credenciales incorrectas'
    if(usuario === 'coderUser' && password == 123) return 'logueado'
}




//Realizar las pruebas
//1.
console.log('----------------- Prueba 1 --------------------');
console.log(`Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)`)
let resultado1 = login('coder','');
if(resultado1==='No se ha proporcionado un password'){
    console.log('--> Test 1 paso')
    testPasados++
}else{
    console.log('--> Test 1 No paso, se esperaba un mensaje, pero dio otro.')
}
//2.
console.log('----------------- Prueba 2 --------------------');
console.log(`Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)`)
let resultado2 = login('','coder');
if(resultado2==='No se ha proporcionado un usuario'){
    console.log('--> Test 2 paso')
    testPasados++
}else{
    console.log('--> Test 2 No paso, se esperaba un mensaje, pero dio otro.')
}
//3.
console.log('----------------- Prueba 3 --------------------');
console.log(`Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)`)
let resultado3 = login('coderUser',1234);
if(resultado3==='Contraseña incorrecta'){
    console.log('--> Test 3 paso')
    testPasados++
}else{
    console.log('--> Test 3 No paso, se esperaba un mensaje, pero dio otro.')
}
//4.
console.log('----------------- Prueba 4 --------------------');
console.log(`Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)`)
let resultado4 = login('coderdUser',123);
if(resultado4==='Credenciales incorrectas'){
    console.log('--> Test 4 paso')
    testPasados++
}else{
    console.log('--> Test 4 No paso, se esperaba un mensaje, pero dio otro.')
}
//5.
console.log('----------------- Prueba 5 --------------------');
console.log(`Si  el usuario y contraseña coinciden, consologuear (“logueado”)`)
let resultado5 = login('coderUser',123);
if(resultado5==='logueado'){
    console.log('--> Test 5 paso')
    testPasados++
}else{
    console.log('--> Test 5 No paso, se esperaba un mensaje, pero dio otro.')
}


console.log('*************************');
if(testPasados=== totalTest){
    console.log('Todas las pruebas pasaron')
}else{
    console.log(`Numero de pruebas pasadas ${testPasados} de un total de ${totalTest}`)
}
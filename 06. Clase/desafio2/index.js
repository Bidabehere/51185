import moment from "moment";

const hoy = moment();

const fechaNacimiento = moment('1979-13-07','YYYY-MM-DD');

if(fechaNacimiento.isValid()){
    let dif = hoy.diff(fechaNacimiento,'days');
    console.log(`Desde mi nacmiento pasaron ${dif} dias.`)
}else{
    console.log('La fecha no es valida')
}
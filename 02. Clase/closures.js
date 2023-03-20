/* function ahorroDinero(monto){

    let ahorroTotal = 0;
    
    ahorroTotal = ahorroTotal + monto;

    return ahorroTotal;
}

console.log(ahorroDinero(500))
console.log(ahorroDinero(1000))
console.log(ahorroDinero(2000)) */

function ahorroDinero(){
    let ahorroTotal = 0;
    return function(monto){
        ahorroTotal = ahorroTotal + monto;
        return ahorroTotal;
    }
}

const ahorroJuan = ahorroDinero();

 ahorroJuan(500);
 ahorroJuan(1000);

console.log(ahorroJuan(1000));
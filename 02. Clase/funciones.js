/* function sumar(num1, num2) {

    //return sum1 + sum1
    let total = num1 + num2;
    return total
   
} */

/* function div(num1, num2) {

    if(num2 == 0){
        return 'No se puede dividir por 0'
    }

    let total = num1 / num2
    return total
}

//let num1 = 22

//console.log(sumar(1,2));
console.log(div(8,0)); */





const div = (num1, num2) => {

    if(num2 == 0){
        return 'No se puede dividir por 0'
    }

    let total = num1 / num2
    return total
}

//console.log(div(8,4));

const sumar = (num1, num2) => num1 + num2
    

console.log(sumar(2,3))
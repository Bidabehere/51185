const obj = {};

 for (let i = 0; i < 10000; i++) {
    let numero = Math.floor(Math.random()*20+1)
    
/*      if(obj[numero]){

        obj[numero]++;
    }else{
        obj[numero] = 1
    } */

    if(!obj[numero]){
        obj[numero] = 1;
    }else{
        obj[numero]++
    }
}
console.log(obj) 
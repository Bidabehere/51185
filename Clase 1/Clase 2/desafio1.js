function mostrarLista(lista){

    if(lista.length === 0){
        console.log(`La lista esta vacia.`)
    }
    for(let i = 0; i < lista.length ; i++){
        console.log(`El elemento es: ${lista[i]}`);
    }
    console.log(`La longitud de la lista es: ${lista.length}`);
}
let arr1 = ['Juan', 'Luis', 'Pedro'];
let arr2 = []

 mostrarLista(arr1)

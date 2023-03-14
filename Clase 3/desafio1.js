const objetos = [
    {
        manzanas: 3,
        peras:2,
        carne: 1,
        jugos:5,
        dulces:2
    },
    {
        manzanas: 1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]
//[manzanas, peras,carne, jugos, dulces, sandias , huevos, panes]

const productos = [];

objetos.forEach(elemento =>{
    productos.push(...Object.keys(elemento))
})
//console.log(productos);

const productosUnicos = productos.reduce((acc,item)=>{
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc;
}, [])

//console.log(productosUnicos);
const cantProductos = []
objetos.forEach(elemento =>{
    cantProductos.push(...Object.values(elemento))
})
//console.log(cantProductos);

let totalProductos = cantProductos.reduce(function(a,b){return a + b },0)

console.log(totalProductos);
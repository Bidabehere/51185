const usuarios = [
    {id:'1',nombre:'Dalia',apellido:'Gómez',sueldo:31000,categoria:'SR'},
    {id:'2',nombre:'Myrna',apellido:'Flores',sueldo:25000,categoria:'SSR'},
    {id:'3',nombre:'Armando',apellido:'Mendoza',sueldo:31000,categoria:'SR'},
    {id:'4',nombre:'Dania',apellido:'Gómez',sueldo:45000,categoria:'TL'},
    {id:'5',nombre:'Lucia',apellido:'Ferreri',sueldo:45000,categoria:'TL'},
    {id:'6',nombre:'Herminio',apellido:'Fuentes',sueldo:18000,categoria:'JR'},
    {id:'7',nombre:'Florencia',apellido:'La Font',sueldo:18000,categoria:'JR'},
    {id:'8',nombre:'Juan',apellido:'Zepeda',sueldo:25000,categoria:'SSR'}
]

//id 7
let usuario = usuarios.filter((usuario) =>{
return usuario.id == 7
})

usuario = usuarios.filter( (usuario)=>{
    return usuario.categoria == 'JR'
})



indiceUsuario = usuarios.findIndex( (usuario)=>{
    return usuario.id == 8
})

// -1 no existe || el valor del indice

usuarios.splice(indiceUsuario, 1)



console.log(usuarios)


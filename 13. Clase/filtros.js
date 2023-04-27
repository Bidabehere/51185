const usuarios = [
    {id:'1',nombre:'Dalia',apellido:'Gómez',sueldo:31000,categoria:'SR', gender: 'F'},
    {id:'2',nombre:'Myrna',apellido:'Flores',sueldo:25000,categoria:'SSR', gender: 'F'},
    {id:'3',nombre:'Armando',apellido:'Mendoza',sueldo:31000,categoria:'SR', gender:'M'},
    {id:'4',nombre:'Daniel',apellido:'Gómez',sueldo:45000,categoria:'TL', gender:'M'},
    {id:'5',nombre:'Lucia',apellido:'Ferreri',sueldo:45000,categoria:'TL', gender:'F'},
    {id:'6',nombre:'Herminio',apellido:'Fuentes',sueldo:18000,categoria:'JR', gender: 'M'},
    {id:'7',nombre:'Florencia',apellido:'La Font',sueldo:18000,categoria:'JR', gender:'F'},
    {id:'8',nombre:'Juan',apellido:'Zepeda',sueldo:25000,categoria:'SSR', gender:'M'}
]
db.usuarios.find({$and:[{gender:'M'},{nombre:'Juan'}]})
db.usuarios.find({$and:[{gender:'M'},{categoria:'TL'}]})
db.usuarios.find({$and:[{categoria:'TL'}]})
db.usuarios.find({$and:[{gender:'M'},{categoria:'TL'},{nombre:'Daniel'}]})

//or
db.usuarios.find({$or:[{gender:'M'},{gender:'F'}]})


//lt menor

db.usuarios.find({sueldo:{$lt:25000}})

//lte menor o igual
db.usuarios.find({sueldo:{$lte:25000}})


//gt mayor
db.usuarios.find({sueldo:{$gt:25000}})

//gte masyor o igual
db.usuarios.find({sueldo:{$gte:25000}})

//ne que no es igual
db.usuarios.find({sueldo:{$ne:25000}})
//eq que es igual
db.usuarios.find({sueldo:{$eq:25000}})
db.usuarios.find({categoria:{$eq:'SSR'}})

//Proyecciones
db.usuarios.find({categoria:{$eq:'SSR'}},{nombre:1, sueldo:1})

//Sort
db.usuarios.find({categoria:{$eq:'SSR'}},{nombre:1, sueldo:1}).sort({nombre:-1})



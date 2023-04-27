//crear base de datos devs

use devs

db.createCollection('usuarios')

db.usuarios.insertMany([{nombre:'Dalia',apellido:'Gómez',sueldo:31000,categoria:'SR', gender: 'F'}, {nombre:'Myrna',apellido:'Flores',sueldo:25000,categoria:'SSR', gender: 'F'},{nombre:'Armando',apellido:'Mendoza',sueldo:31000,categoria:'SR', gender:'M'},    {nombre:'Daniel',apellido:'Gómez',sueldo:45000,categoria:'TL', gender:'M'},    {nombre:'Lucia',apellido:'Ferreri',sueldo:45000,categoria:'TL', gender:'F'},    {nombre:'Herminio',apellido:'Fuentes',sueldo:18000,categoria:'JR', gender: 'M'},    {nombre:'Florencia',apellido:'La Font',sueldo:18000,categoria:'JR', gender:'F'},    {nombre:'Juan',apellido:'Zepeda',sueldo:25000,categoria:'SSR', gender:'M'}])


db.usuarios.find({gender:'F', categoria:'JR'})
db.usuarios.find({categoria:'JR'})


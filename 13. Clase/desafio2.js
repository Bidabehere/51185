use colegio

db.createCollection('estudiantes')

/*

{nombre:'',apellido:'',curso:'',edad:,correo:'',sexo:''}

*/

[{nombre:'Luis',apellido:'Lopez',curso:'Literatura',edad:17,correo:'mailLuis@mail.com',sexo:'M'},{nombre:'Luisa',apellido:'Delfino',curso:'Literatura',edad:17,correo:'correoLuisa@correo.com',sexo:'F'},{nombre:'Pedro',apellido:'Pascal',curso:'Matematicas',edad:18,correo:'correoPedro@correo.com',sexo:'M'},{nombre:'Pablo',apellido:'Pedro',curso:'Matematicas',edad:15,correo:'correo@correo.com',sexo:'M'},{nombre:'Juan',apellido:'Lopez',curso:'Literatura',edad:17,correo:'correoL@correo.com',sexo:'M'}]


db.estudiantes.insertMany([{nombre:'Luis',apellido:'Lopez',curso:'Literatura',edad:17,correo:'mailLuis@mail.com',sexo:'M'},{nombre:'Luisa',apellido:'Delfino',curso:'Literatura',edad:17,correo:'correoLuisa@correo.com',sexo:'F'},{nombre:'Pedro',apellido:'Pascal',curso:'Matematicas',edad:18,correo:'correoPedro@correo.com',sexo:'M'},{nombre:'Pablo',apellido:'Pedro',curso:'Matematicas',edad:15,correo:'correo@correo.com',sexo:'M'},{nombre:'Juan',apellido:'Lopez',curso:'Literatura',edad:17,correo:'correoL@correo.com',sexo:'M'}])

db.estudiantes.insertOne({nombre:'Pablo',apellido:'Bida', curso:'Literatura'})


db.estudiantes.find()
db.estudiantes.find({sexo:'M'})
db.estudiantes.countDocuments()
db.estudiantes.countDocuments({sexo:'F'})

db.estudiantes.insertMany([{nombre:'Pedro'},{nombre:'Luis',apellido:'Delfino',curso:'Literatura',edad:17,correo:'correoLuisa@correo.com',sexo:'M'},{nombre:'Pierina',apellido:'Pascal',curso:'Matematicas',edad:18,correo:'correoPedro@correo.com',sexo:'F'},{nombre:'Paola',apellido:'Pedro',curso:'Matematicas',edad:15,correo:'correo@correo.com',sexo:'F'},{nombre:'Juana',apellido:'Lopez',curso:'Literatura',edad:17,correo:'correoL@correo.com',sexo:'F'}])



db.usuarios.find({categoria:{$eq:'SSR'}},{nombre:1, sueldo:1}).sort({nombre:-1})

db.estudiantes.find({curso:'Literatura'},{nombre:1,curso:1}).sort({nombre:1}).pretty()
db.estudiantes.find({},{nombre:1,curso:1}).sort({nombre:1}).pretty()

db.estudiantes.find({},{nombre:1,curso:1}).sort({nombre:1}).pretty().limit(2)


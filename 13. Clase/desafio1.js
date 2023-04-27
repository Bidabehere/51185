use baseCRUD

db.createCollection('Mascotas')

/*
{nombre: ,especie: ,edad: }


*/


db.Mascotas.insertOne({nombre:'Thom' ,especie:'Policia' ,edad:9})//uno
db.Mascotas.insertMany([{nombre:'Lupe' ,especie:'Caniche' ,edad:12},{nombre:'Rocko' ,especie:'Policia' ,edad:7}])//Varios

db.Mascotas.find({especie:'Policia'})

db.Mascotas.countDocuments()

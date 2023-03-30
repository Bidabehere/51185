import express from 'express'

const PORT = 8080;

const app = express();

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

const usuarios = [
    {id:'1',nombre:'Mauricio',apellido:'Espinosa',edad:25},
    {id:'2',nombre:'Natalia',apellido:'Cardozo',edad:23},
    {id:'3',nombre:'Roberto',apellido:'Gómez',edad:30}
];

app.get('/', (req, res)=>{
    res.send({
        usuarios
    })
})

app.get('/:idUsuario', (req,res)=>{

    const idUsuario = req.params.idUsuario;

    let usuario = usuarios.find(usu => {
        return usu.id === idUsuario
    })

    if(!usuario){
        return res.send({
            error: 'Usuario no encontrado.'
        })
    }

    res.send({usuario})

})


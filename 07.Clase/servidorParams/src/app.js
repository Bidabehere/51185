import express from 'express'

const PORT = 8080;

const app = express();

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})


app.get('/:nombre/:apellido', (req,res)=>{

    const nombre = req.params.nombre
    const apellido = req.params.apellido

    res.send( `Bienvenido ${ nombre } ${apellido}` );

})
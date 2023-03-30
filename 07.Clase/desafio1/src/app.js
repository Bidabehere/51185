import express from 'express'

const PORT = 8080;

const app = express();

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})


app.get('/bienvenida', (req,res)=>{

    res.send(`<h1 style="color:blue">Bienvenido a mi Sitio</h1>`)
})

app.get('/usuario', (req,res)=>{
    res.send({
        nombre: 'Lucas',
        apellido: 'Fernandez',
        edad:28,
        correo: 'correoLucas@mail.com'
    })
})
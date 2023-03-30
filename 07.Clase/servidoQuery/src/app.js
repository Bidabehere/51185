import express from 'express'

const PORT = 8080;

const app = express();

app.use(express.urlencoded({extended:true}))


app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

const usuarios = [
    {id:'1',nombre:'Dalia',apellido:'Gómez',genero:'F'},
    {id:'2',nombre:'Myrna',apellido:'Flores',genero:'F'},
    {id:'3',nombre:'Armando',apellido:'Mendoza',genero:'M'},
    {id:'4',nombre:'Dania',apellido:'Gómez',genero:'F'},
    {id:'5',nombre:'Herminio',apellido:'Fuentes',genero:'M'},
    {id:'6',nombre:'Juan',apellido:'Zepeda',genero:'M'}
]

app.get('/', (req,res)=>{
    const genero = req.query.genero;
    if(!genero || (genero!=='M' && genero!=='F')){
       return res.send({
            usuarios
         })
    }
    let usuariosFiltrados = usuarios.filter(usu => usu.genero === genero );
    res.send({
        usuarios: usuariosFiltrados
    })
})
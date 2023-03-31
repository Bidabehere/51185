import express from 'express'
import DataManager from './Managers/dataManager.js'

const PORT = 8080;

const dataManager = new DataManager()
const app = express();

app.use(express.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    //console.log(`Servidor funcionando en el puerto ${ PORT }`)
    console.log('Servidor funcionando en el puerto: ' + PORT)
})


app.get('/', async (req,res)=>{
    const usuarios = await dataManager.getUsuarios();
    res.send(usuarios)
})

app.get('/usuario/:id', async (req,res)=>{

    const id = req.params.id;
    const usuario = await dataManager.getUsuario(id);
    res.send(usuario)

})

app.get('/eliminar/:id', async (req,res)=>{

    const id = req.params.id;

    const msg = await dataManager.eliminarUsuario(id);
    res.send(msg)
    
})

app.get('/newquery', async (req,res)=>{

    const {nombre, apellido, sueldo, categoria } = req.query;

    if(!nombre || !apellido || !sueldo || !categoria ){
        res.send('Faltan datos')
        return
    }
    const usuario = {
        nombre, apellido,sueldo, categoria
    }
    const msg = await dataManager.crearUsuario(usuario);

    res.send(msg)

})


app.get('/editquery', async (req,res)=>{

    const {id, nombre, apellido, sueldo, categoria } = req.query;

    if(!nombre || !apellido || !sueldo || !categoria || !id ){
        res.send('Faltan datos')
        return
    }

    const msg = await dataManager.modificarUsuario(id, nombre,apellido,sueldo,categoria);

    res.send(msg)

})

import express from 'express';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


let users = [];

app.listen(PORT, ()=>{
    console.log('servidor funcionando en el puerto: ' + PORT)
})

app.get('/api/user', (req,res)=>{

    res.status(200).send({
        users
    })
})

app.post('/api/user', (req,res)=>{

 
    let user = req.body;

    //console.log(user)

    if(!user.first_name || !user.last_name){
        return res.status(400).send({
                status: "error",
                error: "Valores incompletos"
        })
    }

    users.push(user);

    res.status(200).send({
       status: 'correcto',
       mensaje: 'Usuario creado'
    })

})

app.put('/api/user/:uid', (req,res)=>{

})

app.delete('/api/user/:uid', (req,res)=>{

})

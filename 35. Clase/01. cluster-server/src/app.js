import express from "express";
import cluster from "cluster";
import os from "os";
//console.log(cluster.isPrimary);

const numeroCpus = os.cpus().length;

//console.log(numeroCpus)

const PORT = 8080;

if(cluster.isPrimary){
    //workers
    console.log(`Soy el proceso principal: ${process.pid} generando procesos secundarios.`);
    for (let i = 0; i < numeroCpus; i++) {
        //por cada nucleo creamos un proceso secundario
        cluster.fork();
    }
    cluster.on("exit", (worker)=>{
        //se cierra un worker y creo uno nuevo
        console.log(`El proceso secundario: ${worker.process.pid} dejo de funcionar.`);
        cluster.fork();
    })

}else{
    console.log(`Soy el proceso secundario: ${process.pid} soy un Worker.`);

     const app = express();
     app.listen(PORT, ()=>{
        console.log(`Servidor funcionando en el puerto ${PORT}`);
     })

     app.get("/sencilla",(req,res)=>{
        let sum=0;
        for(let i=0;i<1000000;i++){
            sum +=i
        };
        res.send({sum});
    });
    
    app.get("/compleja",(req,res)=>{
        let sum=0;
        for(let i=0;i<5e8;i++){
            sum +=i
        };
        res.send({sum});
    });
}
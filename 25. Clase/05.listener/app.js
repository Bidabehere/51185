process.on("exit", ()=>{
    console.log('La aplicación finalizo')
})
process.on("uncaughtException", (error, origin)=>{
    console.log(`Hubo un error: ${error} ${origin}`);
})

funcionQueNoExiste();
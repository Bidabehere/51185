//console.log(process.cwd());
//console.log(process.pid);

//console.log(process.argv.slice(2))

const argumentos = process.argv.slice(2);

const port = argumentos[1];

console.log("port: " + port)
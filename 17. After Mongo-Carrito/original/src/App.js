import express from 'express';
import productRouter from './routes/products.router.js';
import cartRouter from './routes/carts.router.js';
import __dirname from './utils.js';

const PORT = 8080;

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.listen(PORT, ()=>{
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});

app.use('/api/products', productRouter);

app.use('/api/carts', cartRouter);

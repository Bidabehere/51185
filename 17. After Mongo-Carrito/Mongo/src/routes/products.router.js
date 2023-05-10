import { Router } from 'express';
import __dirname from '../utils.js';
import ProductManager from '../productmanager.js';
import ProductManagerMongo from '../ProductManagerMongo.js';
const PATH = __dirname + '/db/products.json';

const router = Router();

const productManager = new ProductManager(PATH);
const productManagerMongo = new ProductManagerMongo();

router.get('/', async (request, response)=>{
    
    const respuesta = await productManagerMongo.getProducts();

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

//Busca producto por ID interno
router.get('/:pid', async (request, response)=>{
    const pid = parseInt(request.params.pid);

    const respuesta = await productManager.getProductByID(pid);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.post('/', async (request, response)=>{
    const product = request.body;

    const respuesta = await productManagerMongo.addProduct(product);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.put('/:pid', async (request, response)=>{
    const pid = parseInt(request.params.pid);
    
    const product = request.body;

    const respuesta = await productManager.updateProduct(pid, product);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.delete('/:pid', async (request, response)=>{
    const pid = parseInt(request.params.pid);

    const respuesta = await productManager.deleteProduct(pid);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

export default router;
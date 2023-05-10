import { Router } from 'express';
import __dirname from '../utils.js';
//import ProductManager from '../productmanager.js';
//import CartManager from '../cartmanager.js';
import CartManagerMongo from '../cartmanagerMongo.js';

//const CARTS_PATH = __dirname + '/db/carts.json';
//const PRODUCTS_PATH = __dirname + '/db/products.json';

const router = Router();

//const cartManager = new CartManager(CARTS_PATH);
const cartManagerMongo = new CartManagerMongo();
//const productManager = new ProductManager(PRODUCTS_PATH);
//const products = await productManager.getProducts();



router.post('/', async(request, response) => {
    const respuesta = await cartManagerMongo.createCart();
    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.post('/:cid/product/:pid', async (request, response) => {
    const cid = request.params.cid;
    const pid = request.params.pid;

    const respuesta = await cartManagerMongo.updateCart(cid, pid);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.get('/', async(request, response) => {

    const respuesta = await cartManagerMongo.getCarts();

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
})
router.get('/:cid', async(request, response) => {
    const cid = (request.params.cid);

    const respuesta = await cartManagerMongo.getCart(cid);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});


export default router;
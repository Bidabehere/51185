import { Router } from 'express';
import __dirname from '../utils.js';
import ProductManager from '../productmanager.js';
import CartManager from '../cartmanager.js';

const CARTS_PATH = __dirname + '/db/carts.json';

const PRODUCTS_PATH = __dirname + '/db/products.json';

const router = Router();

const cartManager = new CartManager(CARTS_PATH);

const productManager = new ProductManager(PRODUCTS_PATH);

const products = await productManager.getProducts();

router.post('/', async(request, response) => {
    const respuesta = await cartManager.createCart();

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.post('/:cid/product/:pid', async (request, response) => {
    const cid = parseInt(request.params.cid);

    const pid = parseInt(request.params.pid);

    const respuesta = await cartManager.updateCart(cid, pid, products.message);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

router.get('/:cid', async(request, response) => {
    const cid = parseInt(request.params.cid);

    const respuesta = await cartManager.getCart(cid);

    response.status(respuesta.code).send({
        status: respuesta.status,
        message: respuesta.message
    });
});

export default router;
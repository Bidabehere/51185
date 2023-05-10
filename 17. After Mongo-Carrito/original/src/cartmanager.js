import fs from 'fs';

class CartManager{

    constructor(path){
        this.path = path;
    }

    async createCart(){
        const carts = await this.readJSON();

        const cart = {
            id: await this.getNextID(),
            products: []
        };

        carts.push(cart);

        try{
            return await fs.promises.writeFile(this.path, JSON.stringify(carts))
            .then(() => {
                return {
                    code: 202,
                    status: 'Success',
                    message: cart,
                };
            })
        } 
        catch (error) {
            return {
                code: 400,
                status: 'Error',
                message: `${error}`
            };
        };
    };

    async readJSON(){
            return await fs.promises.readFile(this.path,'utf-8').then((data) => JSON.parse(data)).catch(() => []);
    };

    async getNextID(){
        const carts = await this.readJSON();

        const cartIds = Object.keys(carts).map((idx)=>carts[idx].id);

        if(cartIds.length === 0){
            return 0;
        };

        return Math.max(...cartIds) + 1;
    };

    async getCart(cid){
        const carts = await this.readJSON();

        const cart = carts.find(cart => cart.id === cid);
            
        if(!cart){
            return {
                code: 400,
                status: 'Error',
                message: 'No se ha encontrado un cart con ese ID'
            };
        };

        return {
            code: 202,
            status: 'Success',
            message: cart.products
        };
    };

    async updateCart(cid, pid, products){
        const carts = await this.readJSON();

        //Chequeo que exista un cart con el ID provisto
        const cartIndex = carts.findIndex(cart => cart.id === cid);
        
        if (cartIndex === -1) {
            return {
                code: 403,
                status: 'Error',
                message: `No se pudo encontrar un cart con el ID ${cid}`
            };
        }

        //Chequeo que exista un producto con el ID provisto
        const productExists = products.find(product => product.id === pid);
        
        if (!productExists) {
            return {
                code: 403,
                status: 'Error',
                message: `No se pudo encontrar un producto con el ID ${pid}`
            };
        }

        const productIndex = carts[cartIndex].products.findIndex(item => item.product === pid);

        //Si encuentra un index para el producto a agregar, aumentamos su cantidad. Si no, insertamos el producto con una cantidad de 1
        if (productIndex > -1){
            carts[cartIndex].products[productIndex].quantity++;
        } else {
            carts[cartIndex].products.push(
                {
                    product: pid,
                    quantity: 1
                }
            )
        }

        try {
            return await fs.promises.writeFile(this.path, JSON.stringify(carts))
            .then(() => {
                return{
                    code: 202,
                    status: 'Success',
                    message: `El cart con ID ${cid} ha sido actualizado exitosamente`
                };
            })
        } catch (error) {
            return {
                code: 400,
                status: 'Error',
                message: `${error}`
            };
        };
    };

    validateCart(cart){
        if (Object.keys(cart).length === 0){
            return false;
        }
        
        if (cart.products.length === 0){
            return false;
        };

        for (let i = 0; i < cart.products.length; i++){
            if (Object.keys(cart.products[i]).length < 2){
                return false;
            };

            if (cart.products[i].product < 1 || cart.products[i].quantity < 1){
                return false;
            };
        };

        return true;
    };
}

export default CartManager;
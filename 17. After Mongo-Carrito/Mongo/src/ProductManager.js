import fs from 'fs';

class ProductManager{

    constructor(path){
        this.path = path;
    }

    async addProduct(_product){
        const products = await this.readJSON();

        if (!this.validateProduct(_product)){
            return {
                code: 400,
                status: 'Error',
                message: 'Faltan uno o más campos. Por favor, verifique que el objeto a insertar tenga todos los campos obligatorios, etc.'
            };
        };

        const codeFound = products.find(product => product.code === _product.code);

        if (codeFound){
            return {
                code: 403,
                status: 'Error',
                message: `No se pudo agregar el nuevo producto porque el código ${_product.code} ya está en uso`
            };
        };

        if (!_product.thumbnails){
            _product.thumbnails = [];
        };
        
        const product = {
            id: await this.getNextID(),
            title: _product.title,
            description: _product.description,
            code: _product.code,
            price: _product.price,
            status: true,
            stock: _product.stock,
            cateogry: _product.category,
            thumbnails: _product.thumbnails,
        };

        products.push(product);

        try {
            return await fs.promises.writeFile(this.path, JSON.stringify(products))
            .then(() => {
                return {
                    code: 202,
                    status: 'Success',
                    message: `El producto ${product.title} ha sido agregado con éxito. Su ID interno es ${product.id}`
                };
            });
        } catch (error) {
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
        const products = await this.readJSON();

        const productIDS = Object.keys(products).map((idx)=>products[idx].id);

        if(productIDS.length === 0){
            return 0;
        };

        return Math.max(...productIDS) + 1;
    }

    async getProducts(limit){
        const products = await this.readJSON();
            
        if (!limit){
            return {
                code: 202,
                status: 'Success',
                message: products
            };
        };

        if (limit < 0){
            return {
                code: 400,
                status: 'Error',
                message: 'El límite de items es un número negativo'
            };
        };
        
        return {
            code: 202,
            status: 'Success',
            message: products.filter((element, idx)=>idx<limit)
        };
    };

    async getProductByID(pid){
        const products = await this.readJSON();

        const product = products.find(product => product.id === pid);

        if(!product){
            return {
                code: 400,
                status: 'Error',
                message: 'No se han encontrado productos con ese ID'
            };
        };

        return {
            code: 202,
            status: 'Success',
            message: product
        };
    };

    async updateProduct(pid, _product){
        
        const products = await this.readJSON();

        if (!this.validateProduct(_product)){
            return {
                code: 400,
                status: 'Error',
                message: 'Faltan uno o más campos. Por favor, verifique que el objeto a insertar tenga todos los campos obligatorios, etc.'
            };
        };
        
        const idFound = products.find(product => product.id === pid);
        
        //Chequeo que exista un producto con ese ID
        if (!idFound){
            return {
                code: 403,
                status: 'Error',
                message: `No se pudo encontrar un producto con el ID ${pid}`
            };
        };

        //Chequeo que el código de producto no le pertenezca a otro producto.
        const codeFound = products.filter(product => product.id !== pid).find(product => product.code === _product.code);

        if(codeFound){
            return {
                code: 403,
                status: 'Error',
                message: `El código de producto que del producto que intenta actualizar ya pertenece al producto con ID ${codeFound.id}`
            };
        };

        //Si pasa los chequeos, encuentro el index en el array del producto que quiero actualizar y actualizo sus propiedades
        const productIndex = products.findIndex(product => product.id === pid);

        if (!_product.thumbnails){
            _product.thumbnails = [];
        };
        
        products[productIndex].title = _product.title;
        products[productIndex].description = _product.description,
        products[productIndex].code = _product.code,
        products[productIndex].price = _product.price,
        products[productIndex].status = _product.status,
        products[productIndex].stock = _product.stock,
        products[productIndex].category = _product.category,
        products[productIndex].thumbnails = _product.thumbnails
        
        try {
            return await fs.promises.writeFile(this.path, JSON.stringify(products))
            .then(() => {
                return{
                    code: 202,
                    status: 'Success',
                    message: `El producto con ID ${pid} ha sido actualizado exitosamente`
                };
            });
        } catch (error) {
            return {
                code: 400,
                status: 'Error',
                message: `${error}`
            };
        };
    };

    async deleteProduct(pid){
        const products = await this.readJSON();
        
        const productToDelete = products.find(product => product.id === pid);
            
        if (!productToDelete) {
            return {
                code: 400,
                status: 'Error',
                message: `No existe un producto con el ID proporcionado.`
            };
        }

        try {
            return await fs.promises.writeFile(this.path, JSON.stringify(products.filter(product => product.id !== pid)))
            .then(() => {
                return{
                    code: 202,
                    status: 'Success',
                    message: `El producto con ID ${pid} ha sido elminado exitosamente`
                };
            })
        } catch (error) {
            return {
                code: 400,
                status: 'Error',
                message: `${error}`
            };
        }
    };

    validateProduct(_product){

        if (Object.keys(_product).length === 0){
            return false;
        }

        if (!_product.title || !_product.description || !_product.code || !_product.price || !_product.status || !_product.stock || !_product.category){
            return false;
        };

        return true;
    };
}

export default ProductManager;
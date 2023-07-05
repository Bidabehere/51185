import {Faker, en, es } from "@faker-js/faker";


export const customFaker = new Faker({
    //Por Ej. el idioma
    locale: [en],
})

const { commerce, image, database, string, internet, person, phone, datatype, lorem } = customFaker;

const generateProduct = () => {

    return {
        _id: database.mongodbObjectId(),
        title: commerce.productName(),
        price: parseFloat(commerce.price()),
        departament: commerce.department(),
        stock: parseInt(string.numeric(2)),
        image: image.url(),
        code: string.alphanumeric(10),
        description: commerce.productDescription()
    }
}

export const generateUser = () => {
    const productsNumber = Math.ceil(Math.random()*10); // 1 - 10 productos
    let products = [];
    for (let i = 0; i < productsNumber; i++) {
        const product = generateProduct();
        products.push(product);
    }

    return {
        _id: database.mongodbObjectId(),
        first_name: person.firstName(),
        last_name: person.lastName(),
        phone: phone.number(),
        email: internet.email(),
        avatar: image.avatar(),
        role:datatype.boolean() ? 'premium' : 'user',
        jobTitle: person.jobTitle(),
        cart: products
    }
}
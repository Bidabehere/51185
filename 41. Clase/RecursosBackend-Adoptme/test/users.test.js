import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import Assert from "assert";
//import userModel from "../src/dao/models/User.js";

const MONGO_URL="mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185"

const assert = Assert.strict;

//Generar el contexto descreibe 
describe("Testing para la clase User dao", ()=>{

    before(async function(){
        await mongoose.connect(MONGO_URL);
        this.userDao = new Users();
    })

    beforeEach(async function(){
        await userModel.deleteMany();
        this.timeout(10000)
    })

    it("El metodo get de la clase Users debe obtener los usuarios en formato arreglo", async function(){
        const result = await this.userDao.get();
        assert.strictEqual(Array.isArray(result),true);
    })

    it("El dao debe agregar un usuario correctamente a la base de datos", async function(){
        let mockUser = {
            first_name:"Pepe",
            last_name: "Perez",
            email:"pepeperez@mail.com",
            password: "1234"
        }
        const result = await this.userDao.save(mockUser);

        assert.ok(result._id);
    })

    it("Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.", async function(){
        let mockUser = {
            first_name:"Pepe",
            last_name: "Perez",
            email:"pepeperez@mail.com",
            password: "1234"
        }
        const result = await this.userDao.save(mockUser);
        const userDB = await this.userDao.getBy({email:result.email})
        
        let resultTest = false;
        if(Array.isArray(userDB.pets) && userDB.pets.length === 0){
            resultTest = true
        }
        assert.strictEqual(resultTest, true)
    })

    it("El Dao puede obtener a un usuario por email", async function(){
        let mockUser = {
            first_name:"Pepe",
            last_name: "Perez",
            email:"pepeperez@mail.com",
            password: "1234"
        }
        const result = await this.userDao.save(mockUser);
        const userDB = await this.userDao.getBy({email:result.email})

        assert.strictEqual(typeof userDB, 'object')
    })

})
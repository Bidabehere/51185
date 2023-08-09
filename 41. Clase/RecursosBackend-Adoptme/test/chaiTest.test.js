import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import chai from "chai";
import userModel from "../src/dao/models/User.js";

const MONGO_URL="mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185"

const expect = chai.expect;

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
        
        expect(result).to.be.deep.equal([])
        //assert.strictEqual(Array.isArray(result),true);
    })

    it("El dao debe agregar un usuario correctamente a la base de datos", async function(){
        let mockUser = {
            first_name:"Pepe",
            last_name: "Perez",
            email:"pepeperez@mail.com",
            password: "1234"
        }
        const result = await this.userDao.save(mockUser);

        //assert.ok(result._id);
        expect(result).to.have.property("_id");
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
        
        /* let resultTest = false;
        if(Array.isArray(userDB.pets) && userDB.pets.length === 0){
            resultTest = true
        }
        assert.strictEqual(resultTest, true) */
        expect(userDB.pets).to.be.deep.equal([]);
    })

    it("El dao puede actualizar un usuario por id", async function(){
        let mockUser = {
            first_name:"Pepe",
            last_name: "Perez",
            email:"pepeperez@mail.com",
            password: "1234"
        }
        const result = await this.userDao.save(mockUser);
        const userDB = await this.userDao.getBy({email:result.email})

        userDB.first_name = "pepe modificado";

        console.log(userDB)
        const userUpdate = await this.userDao.update(userDB._id,userDB)
        //assert.strictEqual(typeof userDB, 'object')
        
        expect(userUpdate.first_name).to.be.equal("pepe modificado")

    })

})
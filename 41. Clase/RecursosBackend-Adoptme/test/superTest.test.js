import chai from "chai";
import supertest from "supertest";
import petModel from "../src/dao/models/Pet.js";
import userModel from "../src/dao/models/User.js";
import {app} from "../src/app.js";

const expect = chai.expect;
const requester = supertest(app);
const userTest = "pedro1@mail.com";

describe("Testing de App adoptme", ()=>{
    
    describe("Test el modulo de mascotas", ()=>{
    
        beforeEach(async function(){
            await petModel.deleteMany({})
        })
        it("El endpoint crear mascota", async function(){
            const petMock = {
                name: "Pelusa",
                specie: "Perro",
                birthDate: "02-11-2020"
            }
            const result = await requester.post("/api/pets").send(petMock);
            const {statusCode,_body} = result;
            expect(statusCode).to.be.equal(200);
            expect(_body.status).to.be.equal("success");

        })
        it("Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false", async function(){
            const petMock = {
                name: "Pelusa",
                specie: "Perro",
                birthDate: "02-11-2020"
            }
            const result = await requester.post("/api/pets").send(petMock);
            const {statusCode,_body} = result;
            expect(_body.payload.adopted).to.be.equal(false);
        })
        it("Si se desea crear una mascota sin el campo nombre, el módulo debe responder con un status 400.", async function(){
            const petMock = {
                specie: "Perro",
                birthDate: "02-11-2020"
            }
            const result = await requester.post("/api/pets").send(petMock);
            
            expect(result.statusCode).to.be.equal(400);
        })
        it("Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo.", async function(){
            const response = await requester.get("/api/pets");
            expect(response.statusCode).to.be.equal(200);
            expect(response.body).to.haveOwnProperty("status");
            expect(Array.isArray(response.body.payload)).to.deep.equal(true);

        })

    })

    describe("Test avanzado - Flujo autenticacion de un usuario", ()=>{
        before(async function(){
            this.cookie;
            await userModel.deleteMany({})
        })

        it("Registro de un usuario", async function(){

            const userMock = {
                first_name:"juan",
                last_name:"perez",
                email:userTest,
                password:"1234"
            }

            const responseSignup = await requester.post("/api/sessions/register").send(userMock);

            expect(responseSignup.statusCode).to.be.equal(200);

        })
        
        it("Que el endpoint de unprotectedLogin devuelva una cookie de nombre unprotectedCookie.", async function(){
            
            const credentialsMock = {
                email: userTest,
                password: "1234",
              };
              const response = await requester.get('/api/sessions/unprotectedLogin').send(credentialsMock);

              console.log(response)
              const cookiesResult = response.headers['set-cookie'][0];
              expect(cookiesResult).to.be.ok
         
              this.cookie = {
                name: cookiesResult.split('=')[0],
                value: cookiesResult.split('=')[1],
              }
        
              expect(this.cookie.name).to.be.equal('unprotectedCookie');
              //expect(this.cookie.value).to.be.ok
        });

        it("Que el endpoint unprotectedCurrent devuelva al usuario completo.", async function(){
            const {_body : { payload }} = await requester.get("/api/sessions/unprotectedCurrent")
            .set("Cookie", `${this.cookie.name}=${this.cookie.value}`);
            expect(payload.email).to.be.equal(userTest)
        })
        
    })

    describe("Test upload image.", ()=>{
        beforeEach(async function(){
            await petModel.deleteMany({});
        })
        it("Debe poder crearse una mascota con la ruta de la imagen", async function(){
            const petMock = {
                name: "Roko",
                specie: "Perro",
                birthDate: "02-11-2013"
            }
            const response = await requester.post("/api/pets/withimage")
            .field("name", petMock.name)
            .field("specie", petMock.specie)
            .field("birthDate", petMock.birthDate)
            .attach("image","./test/images/descarga.jpg");

            expect(response.statusCode).to.be.equal(200);
            expect(response.body.payload.image).to.be.ok;
        })
    })

})
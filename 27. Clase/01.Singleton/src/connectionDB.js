import mongoose from 'mongoose';

const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185';

class ConnectionDB {
    static #instance;
    constructor(){
        mongoose.connect(MONGO);
    }
    static async getInstance(){
        if(ConnectionDB.#instance){
            console.log('Ya estabas conectado!')
            return ConnectionDB.#instance;
        }else{
            this.#instance = new ConnectionDB();
            console.log('Ahora estas conectado!')
            return this.#instance
        }
    }
}

export {ConnectionDB}
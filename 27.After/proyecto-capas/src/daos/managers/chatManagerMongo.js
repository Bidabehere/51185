class chatManagerMongo{
    constructor(model){
        this.model = model;
    }

    async addMessage(object){
        try {
            const data = await this.model.create(object);
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    };

    async getMessages(){
        try {
            const data = await this.model.find();
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(`Error get all ${error}`);
        }
    };
}

export {chatManagerMongo};
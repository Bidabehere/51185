import mongoose from "mongoose";


const collection = 'Ticket';

const schema = new mongoose.Schema({
   code: String,
   purchase_datetime: {
      type: Date,
      default: Date.now()
   },
   amount: Number,
   purchaser: String,
   //password: String

});
const TicketModel = mongoose.model(collection, schema);

export default TicketModel;
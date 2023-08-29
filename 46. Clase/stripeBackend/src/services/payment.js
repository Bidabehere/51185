import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();


export class PaymentService{
    constructor(){
        this.stripe = new Stripe(process.env.STRIPE_KEY)
    }
    async createPaymentIntent(data){
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent
    }
}
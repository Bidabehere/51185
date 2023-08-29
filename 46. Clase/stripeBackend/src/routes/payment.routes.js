import { Router } from "express";
import { PaymentService } from "../services/payment.js";

const router = Router();

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];

router.post("/payment-intents", async (req,res)=>{

    const productId = parseInt(req.query.id);

    const productRequested = products.find(product => product.id === productId);

    if(!productRequested){
        return res.json({status:"error", error:"No existe el producto"})
    }

    const paymentInfo = {
        amount: productRequested.price,
        currency:"usd",
        metadata:{
            userId:"1321asd321asd321asd",
            orderDetails:JSON.stringify({
                products:2
            }),
            address:JSON.stringify({
                city:"Buenos Aires",
                number:"2200"
            })
        }
    };


    const service = new PaymentService();

    const paymentIntent = await service.createPaymentIntent(paymentInfo);
    res.json({status:"success", payload:paymentIntent})

})


export {router as paymentRouter}
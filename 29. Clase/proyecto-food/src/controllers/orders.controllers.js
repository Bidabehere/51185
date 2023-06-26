
export const getAllOrders = async(req,res) =>{
    res.send({status:"success", result:"getAllOrders"})
}
export const getOrderById = async(req,res) =>{
    res.send({status:"success", result:"getOrderById"})
}
export const createOrder = async(req,res) =>{
    res.send({status:"success", result:"createOrder"})
}
export const resolveOrder = async(req,res) =>{
    res.send({status:"success", result:"resolveOrder"})
}
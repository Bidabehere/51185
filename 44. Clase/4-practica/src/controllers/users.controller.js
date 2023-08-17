//importar las funciones de la capa de servicio
import {UserModel} from "../daos/models/user.model.js";

class UserController{
    static changeRol = async(req,res)=>{
        try {
            const userId = req.params.uid;
            //verificar si el usuario existe en la base de datos
            const user = await UserModel.findById(userId);
            const userRol = user.rol;
            if(userRol === "user"){
                user.rol = "premium"
            } else if(userRol === "premium"){
                user.rol = "user"
            } else {
                return res.json({status:"error", message:"no es posible cambiar el role del usuario"});
            }
            await UserModel.updateOne({_id:user._id},user);
            res.send({status:"success", message:"rol modificado"});
        } catch (error) {
            console.log(error.message);
            res.json({status:"error", message:"hubo un error al cambiar el rol del usuario"})
        }
    }
    static updateUserDocument = async (req,res) =>{
        try {
            const userId = req.params.uid
            const user = await UserModel.findById(userId);
            const identificacion = req.files['identificacion']?.[0] || null;
            const domicilio = req.files['domicilio']?.[0] || null;
            const estadoDeCuenta = req.files['estadoDeCuenta']?.[0] || null;
            const docs = [];
            if(identificacion){
                docs.push({name:"identificacion", reference:identificacion.filename})
            }
            if(domicilio){
                docs.push({name:"domicilio", reference:domicilio.filename})
            }
            if(estadoDeCuenta){
                docs.push({name:"estadoDeCuenta", reference:estadoDeCuenta.filename})
            }
            if(docs.length ===3){
                user.status = "completo"
            }else{
                user.status = "incompleto"
            }
            user.documents = docs;
            console.log(docs)
            console.log("user")
            console.log(user)
            const userUpdate = await UserModel.findByIdAndUpdate(user._id,user)

            res.json({status:"success", message:"Documentos actualizados"})

        } catch (error) {
            console.log(error.message);
            res.json({status:"error", message: "Hubo un error en la carga de los archivos."})
        }
    }
}

export {UserController}
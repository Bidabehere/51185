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
}

export {UserController}
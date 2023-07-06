import { EError } from "../enums/EError.js";

export const errorHandler = (error, req,res,next) => {
    switch (error.code) {
        case EError.INVALID_JSON:
            res.json({status:"error", error: error.cause, message: error.message})
            break;
        case EError.DATABASE_ERROR:
            res.json({status:"error", message: error.message})
            break;
        case EError.INVALID_PARAM:
            res.json({status:"error", message: error.message})
            break;
        default:
            res.json({status:"error", message: "Hubo un error, contacte al equipo de soporte."})
            break;
    }
    next();
}
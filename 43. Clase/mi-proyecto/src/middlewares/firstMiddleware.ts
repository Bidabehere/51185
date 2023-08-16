import { NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";

export class FirstMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){
        console.log(`Metodo ${req.method} en la ruta ${req.baseUrl}`)
        next();
    }
}
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindPericiasController{
    async handle(req:Request, res: Response){
        const pericias = await prismaClient.pericia.findMany();

        return res.json(pericias);
    }

    async findOne(req: Request,res: Response ){

        const { id } = req.params;
        
        const pericia = await prismaClient.pericia.findUnique({
            where:{
                id_pericia: +id
            }
        });

        if(pericia == null){
            return res.status(404).json({error: "Pericia não encontrada"});
        }

        return res.status(200).json(pericia);
    }
}
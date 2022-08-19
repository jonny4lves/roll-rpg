import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeletePericiaController{

    async handle(req:Request, res: Response){
        const { id } = req.params;

        const periciaExists = await prismaClient.pericia.findUnique({
            where:{
                id_pericia: Number(id)
            }
        });

        if(!periciaExists){
            return res.status(404).json({erro:"Pericia not found"})
        }

        const pericia = await prismaClient.pericia.delete({
            where:{
                id_pericia: Number(id)
            }
        });

        return res.json(pericia);
    }

}
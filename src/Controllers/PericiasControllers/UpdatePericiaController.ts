import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdatePericiaController{
    async handle(req: Request, res: Response){
        const {id} = req.params;

        const {nome, descricao} = req.body;

        const periciaExists = await prismaClient.pericia.findUnique({
            where:{
                id_pericia: Number(id)
            }
        });

        if(!periciaExists){
            return res.status(404).json({erro:"Pericia not found"})
        }

        const pericia = await prismaClient.pericia.update({
            where: {
                id_pericia: Number(id)
            },
            data:{
                nome,
                descricao,
            }
        });

        res.status(200).json(pericia);
    }
}
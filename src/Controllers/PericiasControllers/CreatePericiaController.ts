import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreatePericiaController{
    async handle(req: Request, res: Response){

        const {nome, descricao} = req.body;

        const pericia = await prismaClient.pericia.create({
            data:{
                nome,
                descricao,
            }
        });

        return res.json(pericia);
    }
}
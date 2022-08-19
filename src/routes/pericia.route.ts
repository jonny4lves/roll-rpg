import { DeletePericiaController } from '../Controllers/PericiasControllers/DeletePericiaController';
import { UpdatePericiaController } from '../Controllers/PericiasControllers/UpdatePericiaController';
import { FindPericiasController } from '../Controllers/PericiasControllers/FIndPericiasController';
import { Router } from 'express'
import { CreatePericiaController } from '../Controllers/PericiasControllers/CreatePericiaController';

const periciasRouter = Router();

const createPericiaController = new CreatePericiaController();
const findPericiasController = new FindPericiasController();
const updatePericiaController = new UpdatePericiaController();
const deletePericiaController = new DeletePericiaController();

periciasRouter.get("/",findPericiasController.handle);
periciasRouter.get("/:id",findPericiasController.findOne);
periciasRouter.post("/", createPericiaController.handle);
periciasRouter.put("/:id",updatePericiaController.handle);
periciasRouter.delete("/:id",deletePericiaController.handle);


export { periciasRouter }

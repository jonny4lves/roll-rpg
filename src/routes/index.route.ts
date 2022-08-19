import { Router }from "express";
import { periciasRouter } from "./pericia.route";

const routes = Router();

routes.use('/pericias',periciasRouter);

export {routes}
import { Router } from "express";
import { rotasCliente } from "./RotasCliente";

const rotasController = Router();

rotasController.use(rotasCliente);

export {rotasController};
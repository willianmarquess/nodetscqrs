import { Request, Response } from "express";

export interface ICommandController{
    Executar(request : Request, response : Response) : Promise<Response>;
}
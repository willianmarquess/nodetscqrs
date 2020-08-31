import { Request, Response } from "express";

export interface IClienteQueriesController{
    ObterTodos(request : Request, response : Response) : Promise<Response>;
    ObterProId(request : Request, response : Response) : Promise<Response>;
}
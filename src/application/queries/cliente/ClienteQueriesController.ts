import { IClienteQueriesController } from "./IClienteQueriesController";
import { ClienteQueries } from "./ClienteQueries";
import { Request, Response } from "express";

export class ClienteQueriesController implements IClienteQueriesController{

    constructor(private clienteQueries : ClienteQueries){}

    async ObterTodos(request : Request, response : Response) : Promise<Response>{
        return response.status(200).send(await this.clienteQueries.ObterTodos());
    }

    async ObterProId(request : Request, response : Response) : Promise<Response>{
        const id = request.params.id;
        return response.status(200).send(await this.clienteQueries.ObterPorId(id));
    }
}
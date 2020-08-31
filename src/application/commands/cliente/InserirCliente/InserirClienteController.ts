import { ICommandController } from "../../ICommandController";
import { Request, Response } from "express";
import { InserirClienteCommandHandler }  from "./InserirClienteCommandHandler";
import { InserirClienteCommand } from "./InserirClienteCommand";

export class InserirClienteController implements ICommandController{

    constructor(private inserirClienteHandler : InserirClienteCommandHandler){}

    async Executar(request : Request, response : Response) : Promise<Response>{
        const { nome, idade } = request.body;

        try {
            var result = await this.inserirClienteHandler.Handle(new InserirClienteCommand(nome, idade));
            return result.status ? response.status(201).send(result) : response.status(400).send(result);
        } catch (error) {
            response.status(400).send(error)
        }
    }
}
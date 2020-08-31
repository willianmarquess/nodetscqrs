import { ICommandController } from "../../../../core/ICommandController";
import { AtualizarClienteCommandHandler } from "./AtualizarClienteCommandHandler";
import { AtualizarClienteCommand } from "./AtualizarClienteCommand";
import { Request, Response } from "express";

export class AtualizarClienteController implements ICommandController{

    constructor(private atualizarClienteHandler : AtualizarClienteCommandHandler){}

    async Executar(request : Request, response : Response) : Promise<Response>{
        const { id, nome, idade } = request.body;

        try {
            var result = await this.atualizarClienteHandler.Handle(new AtualizarClienteCommand(id, nome, idade));
            return result.status ? response.status(201).send(result) : response.status(400).send(result);
        } catch (error) {
            response.status(400).send(error)
        }
    }
}
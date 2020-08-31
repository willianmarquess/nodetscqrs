import { ICommandHandler } from "../../ICommandHandler";
import { InserirClienteCommand } from "./InserirClienteCommand";
import { ClienteCommandResponse } from "../ClienteCommandResponse";
import { IClienteRepository } from "../../../../data/cliente/IClienteRepository";
import { Cliente } from "../../../../entities/Cliente";

export class InserirClienteCommandHandler implements ICommandHandler{

    constructor(private clienteRepository : IClienteRepository){}
    
    async Handle(command : InserirClienteCommand): Promise<ClienteCommandResponse>{
        if(command.errorCommandResult.length > 0){
            return new ClienteCommandResponse(false, command.errorCommandResult);
        }

        const cliente = new Cliente(command.nome, command.idade);
        await this.clienteRepository.Inserir(cliente);
        return new ClienteCommandResponse(true, "Cliente cadastrado com sucesso!");
    }
}
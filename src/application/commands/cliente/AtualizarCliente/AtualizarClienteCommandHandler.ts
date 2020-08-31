import { ICommandHandler } from "../../ICommandHandler";
import { IClienteRepository } from "../../../../data/cliente/IClienteRepository";
import { AtualizarClienteCommand } from "./AtualizarClienteCommand";
import { ClienteCommandResponse } from "../ClienteCommandResponse";
import { Cliente } from "../../../../entities/Cliente";

export class AtualizarClienteCommandHandler implements ICommandHandler{

    constructor(private clienteRepository : IClienteRepository){}
    
    async Handle(command : AtualizarClienteCommand): Promise<ClienteCommandResponse>{
        if(command.errorCommandResult.length > 0){
            return new ClienteCommandResponse(false, command.errorCommandResult);
        }

        const cliente = new Cliente(command.nome, command.idade);
        const result = await this.clienteRepository.Atualizar(cliente);
        return result ? new ClienteCommandResponse(true, "Cliente alterado com sucesso!") : new ClienteCommandResponse(false, "Cliente não encontrado!");
    }
}
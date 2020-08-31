import { ICommandValidator } from "../../ICommandValidator";
import { ErrorCommandResult } from "../../ErrorCommandResult";
import { AtualizarClienteCommand } from "./AtualizarClienteCommand";

export class AtualizarClienteCommandValidator implements ICommandValidator{
    
    private errorsCommandResult : Array<ErrorCommandResult>;

    constructor(private atualizarClienteCommand : AtualizarClienteCommand){
        this.errorsCommandResult = [];
    }

    Validate(): Array<ErrorCommandResult> {

        if(this.atualizarClienteCommand.id == null || this.atualizarClienteCommand.id == ""){
            this.errorsCommandResult.push(new ErrorCommandResult("id", "Id inválido"));
        }

        if(this.atualizarClienteCommand.nome == null || this.atualizarClienteCommand.nome.length == 0){
            this.errorsCommandResult.push(new ErrorCommandResult("nome", "Nome inválido"));
            
        }

        if(this.atualizarClienteCommand.idade < 10 || this.atualizarClienteCommand.idade == null){
            this.errorsCommandResult.push(new ErrorCommandResult("idade", "Idade inválida"));
        }
        return this.errorsCommandResult;
    }
}
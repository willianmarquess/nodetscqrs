import { ICommandValidator } from "../../ICommandValidator";
import { ErrorCommandResult } from "../../ErrorCommandResult";
import { InserirClienteCommand } from "./InserirClienteCommand";

export class InserirClienteCommandValidator implements ICommandValidator{
    
    private errorsCommandResult : Array<ErrorCommandResult>;

    constructor(private inserirClienteCommand : InserirClienteCommand){
        this.errorsCommandResult = [];
    }

    Validate(): Array<ErrorCommandResult> {
        
        if(this.inserirClienteCommand.nome == null || this.inserirClienteCommand.nome.length == 0){
            this.errorsCommandResult.push(new ErrorCommandResult("nome", "Nome inválido"));
            
        }

        if(this.inserirClienteCommand.idade < 10 || this.inserirClienteCommand.idade == null){
            this.errorsCommandResult.push(new ErrorCommandResult("idade", "Idade inválida"));
        }
        return this.errorsCommandResult;
    }

}
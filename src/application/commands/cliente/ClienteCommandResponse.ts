import { ErrorCommandResult } from "../ErrorCommandResult";
import { CommandResponse } from "../CommandResponse";

export class ClienteCommandResponse extends CommandResponse{

    constructor(status : boolean, mensagem : string | Array<ErrorCommandResult>){
        super(status, mensagem);
    }
    
}
import { ErrorCommandResult } from "./ErrorCommandResult";

export class CommandResponse{
    public status : boolean;
    public mensagem : string | Array<ErrorCommandResult>;

    constructor(status : boolean, mensagem : string | Array<ErrorCommandResult>){
        this.status = status;
        this.mensagem = mensagem;
    }
}
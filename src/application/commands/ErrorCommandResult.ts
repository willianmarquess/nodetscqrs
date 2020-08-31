export class ErrorCommandResult{
    public nomeErro : string;
    public mensagem : string;

    constructor(nomeErro : string, mensagem : string){
        this.nomeErro = nomeErro;
        this.mensagem = mensagem;
    }
}
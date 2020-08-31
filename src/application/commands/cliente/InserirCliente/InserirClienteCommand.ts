import { Command } from "../../Command";
import { InserirClienteCommandValidator } from "./InserirClienteCommandValidator";

export class InserirClienteCommand extends Command{

    public nome: string;
    public idade: number;

    constructor(nome : string, idade : number){
        super();
        this.nome = nome;
        this.idade = idade;
        this.Validate();
    }
    
    Validate(){
        super.errorCommandResult = new InserirClienteCommandValidator(this).Validate();
    }
}
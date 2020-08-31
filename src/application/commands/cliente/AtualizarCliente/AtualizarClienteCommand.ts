import { Command } from "../../Command";
import { AtualizarClienteCommandValidator } from "./AtualizarClienteCommandValidator";

export class AtualizarClienteCommand extends Command{

    public id : string;
    public nome: string;
    public idade: number;

    constructor(id: string, nome : string, idade : number){
        super();
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.Validate();
    }
    
    Validate(){
        super.errorCommandResult = new AtualizarClienteCommandValidator(this).Validate();
    }
}
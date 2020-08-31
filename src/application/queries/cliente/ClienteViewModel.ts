import { EntityViewModel } from "../EntityViewModel";

export class ClienteViewModel extends EntityViewModel{
    public  id : string;
    public nome : string;
    public idade : number;

    constructor(id : string, nome : string, idade : number){
        super();
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
}
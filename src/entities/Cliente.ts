import { Entity } from "./Entity";

export class Cliente extends Entity{
   
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    super();
    this.nome = nome;
    this.idade = idade;
  }
}

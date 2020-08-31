import { Cliente } from "../../entities/Cliente";

export interface IClienteRepository{
    Inserir(cliente : Cliente) : Promise<boolean>;
    Atualizar(cliente : Cliente) : Promise<boolean>;
    ObterTodos() : Promise<Array<Cliente>>;
    ObterPorId(id : string) : Promise<Cliente>;
}
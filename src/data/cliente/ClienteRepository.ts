import { IClienteRepository } from "./IClienteRepository";
import { Cliente } from "../../entities/Cliente";

export class ClienteRepository implements IClienteRepository{

    private static baseDados = [
                            { id : "1", nome : "willian", idade: 25},
                            { id : "2", nome : "carlos", idade: 50},
                            { id : "3", nome : "tiago", idade: 45},
                            { id : "4", nome : "alexandre", idade: 20}
                        ];
    private static clientes : Array<Cliente> = [...ClienteRepository.baseDados];

    async Inserir(cliente: Cliente): Promise<boolean> {
        await ClienteRepository.clientes.push(cliente);
        return true;
    }
    async Atualizar(cliente: Cliente): Promise<boolean> {

        await ClienteRepository.clientes.forEach(c => {
            if(c.id == cliente.id){
                c.nome = cliente.nome;
                c.idade = cliente.idade;
                return true;
            }
        });
        return false;
        
    }
    async ObterTodos(): Promise<Array<Cliente>> {
        return ClienteRepository.clientes;
    }
    async ObterPorId(id: string): Promise<Cliente> {
        const cliente = ClienteRepository.clientes.find(c => c.id === id);
        return cliente;
    }

}
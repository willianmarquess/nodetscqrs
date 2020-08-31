import { IQueries } from "../IQueries";
import { ClienteViewModel } from "./ClienteViewModel";
import { IClienteRepository } from "../../../data/cliente/IClienteRepository";

export class ClienteQueries implements IQueries{

    constructor(private clienteRepository : IClienteRepository){}

    async ObterTodos(): Promise<Array<ClienteViewModel>> {
        const clientesViewModel : Array<ClienteViewModel>  = await this.clienteRepository.ObterTodos();
        return clientesViewModel;
    }
    async ObterPorId(id : string): Promise<ClienteViewModel> {
        const clienteViewModel : ClienteViewModel  = await this.clienteRepository.ObterPorId(id);
        return clienteViewModel;
    }
}
import { Router } from "express";
import { inserirClienteController } from "../application/commands/cliente/InserirCliente";
import { atualizarClienteController } from "../application/commands/cliente/AtualizarCliente";
import { clienteQueriesController } from "../application/queries/cliente";

const rotasCliente = Router();

rotasCliente.post('/clientes', (request, response) => {
    return inserirClienteController.Executar(request, response);
});

rotasCliente.put('/clientes', (request, response) => {
    return atualizarClienteController.Executar(request, response);
});

rotasCliente.get('/clientes', (request, response) => {
    return clienteQueriesController.ObterTodos(request, response);
});

rotasCliente.get('/clientes', (request, response) => {
    return clienteQueriesController.ObterTodos(request, response);
});

export {rotasCliente};
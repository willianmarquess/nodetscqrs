import { Router } from "express";
import { inserirClienteController } from "../application/commands/cliente/InserirCliente";
import { atualizarClienteController } from "../application/commands/cliente/AtualizarCliente";
import { clienteQueriesController } from "../application/queries/cliente";

const rotasCliente = Router();

rotasCliente.post('/cliente', (request, response) => {
    return inserirClienteController.Executar(request, response);
});

rotasCliente.put('/cliente', (request, response) => {
    return atualizarClienteController.Executar(request, response);
});

rotasCliente.get('/cliente', (request, response) => {
    return clienteQueriesController.ObterTodos(request, response);
});

rotasCliente.get('/cliente/:id', (request, response) => {
    return clienteQueriesController.ObterProId(request, response);
});

export {rotasCliente};
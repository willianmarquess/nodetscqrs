import { ClienteRepository } from "../../../data/cliente/ClienteRepository";
import { ClienteQueries } from "./ClienteQueries";
import { ClienteQueriesController } from "./ClienteQueriesController";

const clienteRepository = new ClienteRepository();

const clienteQueries = new ClienteQueries(clienteRepository);

const clienteQueriesController = new ClienteQueriesController(clienteQueries);

export {clienteQueriesController};
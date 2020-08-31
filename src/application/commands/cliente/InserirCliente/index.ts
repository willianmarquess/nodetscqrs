import { ClienteRepository } from "../../../../data/cliente/ClienteRepository";
import { InserirClienteCommandHandler } from "./InserirClienteCommandHandler";
import { InserirClienteController } from "./InserirClienteController";

const clienteRepository = new ClienteRepository();

const inserirClienteCommandHandler = new InserirClienteCommandHandler(clienteRepository);

const inserirClienteController = new InserirClienteController(inserirClienteCommandHandler);

export {inserirClienteController};
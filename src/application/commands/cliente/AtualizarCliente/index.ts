import { ClienteRepository } from "../../../../data/cliente/ClienteRepository";
import { AtualizarClienteCommandHandler } from "./AtualizarClienteCommandHandler";
import { AtualizarClienteController } from "./AtualizarClienteController";

const clienteRepository = new ClienteRepository();

const atualizarClienteCommandHandler = new AtualizarClienteCommandHandler(clienteRepository);

const atualizarClienteController = new AtualizarClienteController(atualizarClienteCommandHandler);

export {atualizarClienteController};
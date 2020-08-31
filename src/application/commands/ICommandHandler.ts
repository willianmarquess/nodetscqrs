import { Command } from "./Command";
import { CommandResponse } from "./CommandResponse";

export interface ICommandHandler{
    Handle(command : Command) : Promise<CommandResponse>;
}
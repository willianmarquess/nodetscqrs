import { ErrorCommandResult } from "./ErrorCommandResult";

export interface ICommandValidator{
    Validate(): Array<ErrorCommandResult>;
}
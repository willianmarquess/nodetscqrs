import { EntityViewModel } from "./EntityViewModel";

export interface IQueries {
    ObterTodos() : Promise<Array<EntityViewModel>>;
    ObterPorId(id : string) : Promise<EntityViewModel>;
}
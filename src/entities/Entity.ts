import { uuid } from 'uuidv4'

export abstract class Entity{
    public id : string;

    constructor(){
          this.id = uuid();
    }
}
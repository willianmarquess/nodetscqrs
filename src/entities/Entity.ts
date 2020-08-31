import { uuid } from 'uuidv4'

export class Entity{
    public id : string;

    constructor(){
          this.id = uuid();
    }
}
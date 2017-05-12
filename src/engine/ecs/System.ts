import {Aspect} from "./Aspect";
import {Entity} from "./Entity";

export interface System {
    update: (tick : Number, entities: Array<Entity>) => void;
}

export class SystemStub implements System {
    update: (tick: Number, entities: Array<Entity>) => {};
}
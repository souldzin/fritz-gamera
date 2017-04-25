import {Entity} from "./Entity";

export interface ISystem {
    start: () => void;
    update: (time: number) => void;
    end: () => void;
}

export abstract class System {

    start = () => {

    }

    update = (deltaTime: number) => {

    }

    processEntities = (entities: Array<Entity>) => {

    }

    end = () => {

    }


}




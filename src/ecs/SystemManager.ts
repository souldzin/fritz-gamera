import {Entity} from "./Entity";
import {ISystem} from "./ISystem";

export class SystemManager {
    private entities: {[key: string]: Entity};
    private systems: {[key: string]: ISystem};
    public isUpdating: boolean;

    update = (time: number) => {
        this.isUpdating = true;
        
        Object.keys(this.systems).forEach(key => 
            this.systems[key].update(time));

        this.isUpdating = false;
    }

    addEntity = (entity: Entity, name: string) => {
        this.entities[name] = entity;
    }

    removeEntity = (name: string) => {
        delete this.entities[name];
    }

    addSystem = (system: ISystem) => {
        this.systems[system.constructor.name] = system;
    }

    removeSystem = (system: ISystem) => {
        delete this.systems[system.constructor.name];
    }    
}

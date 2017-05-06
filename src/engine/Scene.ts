import {System, Entity} from "./ecs";
import {createGuid} from "./utilities/guid";

class Scene {
    private readonly _entities : Array<Entity>;
    private readonly _systems : Array<System>;

    constructor(systems : Array<System>, entities : Array<Entity>) {
        this._entities = [];
        this._systems = [];

        this.addEntities(entities);
        this.addSystems(systems);
    }

    public entities = () => {
        return this._entities;
    }

    public systems = () => {
        return this._systems;
    }

    public addEntities = (entities : Array<Entity>) => {
        if(!entities || !entities.length) {
            return this;
        }
        
        Array.prototype.push.apply(this._entities, entities);

        return this;
    }

    public addSystems = (systems : Array<System>) => {
        if(!systems || !systems.length) {
            return this;
        }
        
        Array.prototype.push.apply(this._systems, systems);

        return this;
    }

    public update = (tick : Number) => {
        this.systems().forEach(s => s.update(tick, this.entities()));
    }
}

export {Scene};
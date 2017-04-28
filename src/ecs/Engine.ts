import {EntityStore} from "./EntityStore";
import {ISystem} from "./System";

export class Engine {
    private _entityStore: EntityStore;
    private _systems: Array<ISystem<any>> = [];

    constructor(entityStore: EntityStore, systems: Array<ISystem<any>> = []) {
        this._entityStore = entityStore;
        this._systems = systems;
    }

    addSystem = (system: ISystem<any>) => {
        this._systems.push(system);
        return this;
    }

    update = () => {
        this._systems.forEach(this.updateSystem);
    }

    updateSystem = (system: ISystem<any>) => {
        const {aspect, entityProjection} = system;

        const family = this._entityStore.entities.filter(entity => aspect.check(entity));
        family.forEach(entity => {
            console.log(entity);
            const projection = entityProjection(entity);
            system.onUpdate(projection);
        });
    }
}

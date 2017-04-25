import {ISystem} from "./../ISystem";

export class SystemStore {
    private systems: {[key: string]: ISystem}

    getSystems = () => {
        return this.systems;
    }

    addSystem = (system: ISystem) => {
        this.systems[system.constructor.name] = system;
    }

    removeSystem = (system: ISystem) => {
        delete this.systems[system.constructor.name];
    }
}

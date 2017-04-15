import {Entity} from "./Entity";
import {ISystem} from "./ISystem";
import {EntityStore} from "./data/EntityStore";
import {SystemStore} from "./data/SystemStore";

export class SystemManager {
    private systemStore: SystemStore;
    private entityStore: EntityStore;

    public isUpdating: boolean;

    constructor(entityStore: EntityStore, systemStore: SystemStore) {
        this.entityStore = entityStore;
        this.systemStore = systemStore;
    }

    update = (time: number) => {
        this.isUpdating = true;
        
        const systems = this.systemStore.getSystems();
        Object.keys(systems).forEach(key => 
            systems[key].update(time));

        this.isUpdating = false;
    } 
}

import {Entity} from "./../Entity";

export class EntityStore {
    private componentEntityLookup: {[componentKey: string]: Array<string>}
    private entities: {[key: string]: Entity};

    constructor() {
        this.entities = {};
        this.componentEntityLookup = {};        
    }

    getEntities = () => {
        return this.entities;
    }

    getComponentEntityLookup = () => {
        return this.componentEntityLookup;
    }

    getEntityCount = () => {
        return Object.keys(this.entities).length;
    }

    addEntity = (entity: Entity, id: string) => {
        // Should we do something if the entity already exists?
        this.entities[id] = entity;

        Object.keys(entity.components).forEach(componentId => {
            this.addEntityComponentToLookup(componentId, id);
        });

        // Subscribe to entity component changes and apply updates
        entity.componentAddedObservable.subscribe(x => {
            this.addEntityComponentToLookup(x.id, id);
        });
        
        entity.componentRemovedObservable.subscribe(x => {
            this.removeEntityComponentFromLookup(x.id, id);
        });
    }

    removeEntity = (id: string) => {
        const entity = this.entities[id];

        // remove components from componentEntityLookup
        Object.keys(entity.components).forEach((key) => {
            this.removeEntityComponentFromLookup(key, id);
        });

        delete this.entities[id];
    }

    private addEntityComponentToLookup = (componentId: string, entityId: string) => {
        if(!this.componentEntityLookup[componentId]) {
            this.componentEntityLookup[componentId] = [entityId];
        } else {
            this.componentEntityLookup[componentId].push(entityId);
        }
    }

    private removeEntityComponentFromLookup = (componentId: string, entityId: string) => {
        if(!this.componentEntityLookup[componentId]) {
            return;
        } else {
            this.componentEntityLookup[componentId] = this.componentEntityLookup[componentId].filter(x => x !== entityId);
            if(!this.componentEntityLookup[componentId].length) {
                delete this.componentEntityLookup[componentId];
            }
        }
    }
}


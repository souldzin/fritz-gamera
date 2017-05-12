import {EntityStore} from "./EntityStore";
import {Entity} from "./Entity";
import {Aspect} from "./Aspect";

export class EntityLookup {
    public readonly aspect: Aspect;
    private _ids: Array<string> = [];

    public getEntity: (id: string) => Entity;

    public constructor(store: EntityStore, aspect: Aspect) {

        this.aspect = aspect;
        this.getEntity = store.get.bind(store);

        store.entityAddedObservable.subscribe(this.checkEntity);
        store.entityRemovedObservable.subscribe(this.remove);
    }

    private add = (entity: Entity) => {
        const id = entity.id();

        if(id in this._ids) return;

        this._ids.push(id);
    }

    private remove = (entity: Entity) => {
        const id = entity.id();

        let index = this._ids.indexOf(id);
        if(index === -1) return;

        this._ids.splice(index, 1);
    }

    private checkEntity = (entity: Entity) => {
        if(this.aspect.check(entity)) {
            this.add(entity);
        } else {
            this.remove(entity);
        }
    }

    public forEach = (callback: (entity: Entity) => void) => 
        this._ids.forEach(id => callback(this.getEntity(id)));
}


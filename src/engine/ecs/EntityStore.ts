import {Aspect} from "./Aspect";
import {Entity} from "./Entity";
import {createGuid} from "./../utilities/guid";
import {Subject} from "rxjs";


export class EntityStore {

    private _entities: {[id: string]: Entity} = {};
    private _entityAddedSubject = new Subject<Entity>();
    private _entityRemovedSubject = new Subject<Entity>();

    public get entities() { return Object.keys(this._entities).map(x => this._entities[x]); };
    public entityAddedObservable = this._entityAddedSubject.asObservable();
    public entityRemovedObservable = this._entityRemovedSubject.asObservable();

    public registerAspect = (aspect: Aspect) => {

    }

    public addAll = (...entities: Array<Entity>) => 
        entities.forEach(this.add);

    public add = (entity: Entity) => {
        const id = entity.id();

        // If entity is already in store, don't bother.
        if (this._entities[id]) {return;}

        this._entities[id] = entity;
        this._entityAddedSubject.next(entity);

        return this;
    }

    public removeAll = (...entities: Array<string | Entity>) =>
        entities.forEach(this.remove);

    public remove = (entity: string | Entity) => {
        let id: string;

        if (typeof entity === "string") {
            id = entity;
        } else {
            id = entity.id();
        }

        entity = this._entities[id];
        delete this._entities[id];
        this._entityRemovedSubject.next(entity);

        return this;
    }

    public get = (id: string) =>
        this._entities[id];

    public getAll = (...ids: Array<string>) =>
        ids.map(this.get);
}


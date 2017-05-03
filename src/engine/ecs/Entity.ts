import {Subject} from "rxjs";
import {createGuid} from "./../utilities/guid";
import {IComponent, ComponentIdentifier, getComponentIdentifier} from "./Component";

export class Entity {
    private _id: string;
    private _tag: string;
    private _components: {[key: string]: IComponent} = {};
    private _entityUpdatedSubject = new Subject<Entity>();

    public get id() { return this._id; }
    public get components() { return this._components; }

    constructor(...components: Array<any>) {
        this._id = createGuid();

        if(components.length) {
            this.add(...components);
        }        
    }

    public entityUpdatedObservable = this._entityUpdatedSubject.asObservable();

    public add = (...components: Array<any>) => {
        components.forEach(component => {
            let id = component["__id"];
            this._components[id] = component;
        });

        this._entityUpdatedSubject.next(this);
        return this;
    }

    public remove = <T extends IComponent>(component: {new(): T} | ComponentIdentifier) => {
        const componentId = getComponentIdentifier(component);
        delete this._components[componentId];

        return this;
    }

    public get<T>(component: {new(): T} | ComponentIdentifier): T {
        const componentId = getComponentIdentifier(component);
        return this._components[componentId] as any as T;
    }

    public has<T>(component: {new(): T} | ComponentIdentifier): boolean {
        const componentId = getComponentIdentifier(component);
        return !!this._components[componentId];
    }
}

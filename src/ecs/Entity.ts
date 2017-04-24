import {IComponent, ComponentIdentifier, getComponentIdentifier} from "./Component";

export class Entity {
    private _guid: string; 
    private _tag: string;
    private _components: {[key: string]: IComponent} = {};

    public add = (...components: Array<any>) => {
        components.forEach(component => {
            let id = component["__id"];
            this._components[id] = component;
        });

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

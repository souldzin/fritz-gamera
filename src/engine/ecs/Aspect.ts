import {ComponentIdentifier, IComponent} from "./Component";
import {Entity} from "./Entity";

export class Aspect {
    private _all: Array<string> = [];
    private _none: Array<string> = [];
    private _one: Array<string> = [];

    public all = (...components: ComponentIdentifier[]) => {
        components.forEach(comp => this._all.push((<IComponent>comp).__id));
        return this;
    }        

    public one = (...components: ComponentIdentifier[]) => {
        components.forEach(comp => this._one.push((<IComponent>comp).__id));
        return this;
    }        

    public none = (...components: ComponentIdentifier[]) => {
        components.forEach(comp => this._none.push((<IComponent>comp).__id));
        return this;
    }        

    public check = (entity: Entity) => {
        let components = entity.components;
        return this._all.every(id => id in components)
            && this._none.every(id => !(id in components))
            && (this._one.length === 0 || this._one.some(id => id in components));
    }
}

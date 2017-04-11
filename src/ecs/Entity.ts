import {IComponent} from "./IComponent";
import {ICtor} from "./../utilities/ICtor";

interface IComponentDictionary {
    [key: string]: IComponent
}

export class Entity {
    public components: IComponentDictionary = {};

    constructor(components?: Array<IComponent>) {
        components.forEach(this.add);
    }

    add = <T extends IComponent>(component: IComponent) => {
        this.components[component.constructor.name] = component;
    }

    remove = <T extends IComponent>(componentClass: ICtor<T>) => {
        delete this.components[componentClass.name];
    }

    get = <T extends IComponent>(componentClass: ICtor<T>) => {
        return this.components[componentClass.name];
    }
}

import {IEntity} from "./IEntity";
import {IComponent} from "./IComponent";

export class Entity implements IEntity {
    private components: {[key: string]: IComponent}

    add = (component: IComponent) => {
        this.components[component.__componentName] = component;
    }

    remove = (component: IComponent) => {
        delete this.components[component.__componentName];
    }

    get = <T>(componentName: string) => {
        return this.components[componentName];
    }
}

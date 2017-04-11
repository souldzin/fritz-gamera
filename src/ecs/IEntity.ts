import {IComponent} from "./IComponent";

/*
    Entites are collections of components. 
    Components collectively contain the state of the Entity.
*/

export interface IEntity {
    components: {[key: string]: IComponent};
    add: (component: IComponent) => void;
    remove: (component: IComponent) => void;
    get: <T>(componentName: string) => T;
}

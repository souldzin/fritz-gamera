import {IComponent} from "./IComponent";
import {ICtor} from "./../utilities/ICtor";
import {Observable, Subject} from "rx";

interface IComponentDictionary {
    [key: string]: IComponent
}

export class Entity {
    private componentAddedSubject = new Subject<{id: string, component: IComponent}>();
    private componentRemovedSubject = new Subject<{id: string}>();

    public components: IComponentDictionary = {};
    public componentAddedObservable: Observable<{id: string, component: IComponent}> = this.componentAddedSubject.asObservable();
    public componentRemovedObservable: Observable<{id: string}> = this.componentRemovedSubject.asObservable();   

    constructor(components?: Array<IComponent>) {
        components.forEach(this.add);
    }

    add = <T extends IComponent>(component: IComponent) => {
        const id = component.constructor.name;
        this.components[id] = component;
        this.componentAddedSubject.onNext({id, component});
    }

    remove = <T extends IComponent>(componentClass: ICtor<T>) => {
        const id = componentClass.name;
        delete this.components[id];
        this.componentRemovedSubject.onNext({id})
    }

    get = <T extends IComponent>(componentClass: ICtor<T>) => {
        return this.components[componentClass.name];
    }
}

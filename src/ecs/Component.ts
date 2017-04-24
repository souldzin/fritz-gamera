import {createGuid} from "./../utilities/guid";

export type ComponentIdentifier = IComponent | Function;

export interface IComponent {
    __id: string; 
    __name: string;
}

export const Component = <T extends Function>(ctor: T): T => 
    NamedComponent(ctor.name)(ctor);

export const NamedComponent = (name: string) => 
    <T extends Function>(ctor: T): T => {
        const componentIdentifier = name.toLowerCase();

        Object.defineProperties(ctor.prototype, {
            __id: {value: componentIdentifier}
        });

        (ctor as any)["__id"] = componentIdentifier;

        return ctor;
    }

export const getComponentIdentifier = (component: ComponentIdentifier) => {
    const identifier = ((component as any).__id);
    return identifier ? identifier.toLowerCase() : null;
}

// A component should be nothing more than data. 
// A Behavior/System will know how to read / update component state
export abstract class Component {
    constructor() { 

    }

    abstract onUpdate = (delta: number) => {}
}

type VelocityComponent = {
    x: number;
    y: number;
    z: number;
}

type PositionComponent = {
    x: number;
    y: number;
    z: number;
}

interface IComponent {
    [key: string]: any;
}

interface IEntity {
    components: {[key: string]: IComponent};
    add: (component: IComponent) => void;
    remove: (component: IComponent) => void;
    get: <T>() => T;  
}

interface ISystem {
    update: (time: number) => void;
}

class MeshRendererSystem implements ISystem {
    
}


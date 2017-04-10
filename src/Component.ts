export abstract class Component extends THREE.Object3D {
    constructor() {
        super();
    }

    abstract onUpdate = (delta: number) => {}
}

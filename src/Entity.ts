import {Scene} from "three";
import {Component} from "./Component";

export class Entity {
    position: THREE.Vector3;
    rotation: number;
    scale: number;
    visible: boolean;

    components: Array<Component>;

    constructor(
        position: THREE.Vector3,
        rotation: number,
        scale: number,
        visible: boolean) {
            this.position = position;
            this.rotation = rotation;
            this.scale = scale;
            this.visible = visible;
        }

    registerWithScene = (scene: Scene) => {
        this.components.forEach(x => scene.add(x));
    }

    addComponent = (component: Component)  => {
        this.components.push(component);
    }

    onGameTick = () => {
        console.log("tick");
    }
}

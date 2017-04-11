import {Vector3, Quaternion} from "three";
import {IComponent} from "ecs";

export class TransformComponent implements IComponent {
    position: Vector3;
    rotation: Quaternion;
    scale: number;

    constructor(
        position: Vector3 = new Vector3(0, 0, 0), 
        rotation: Quaternion = new Quaternion(0, 0, 0), 
        scale: number = 1) {            
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}

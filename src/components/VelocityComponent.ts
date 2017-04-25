import {Vector3, Quaternion} from "three";
import {IComponent} from "./../ecs/IComponent";

export class VelocityComponent implements IComponent {
    transformVelocity: Vector3;
    rotationVelocity: Vector3;
    scaleVelocity: number;
}

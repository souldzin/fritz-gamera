import {Vector3, Quaternion} from "three";
import {IComponent} from "./../ecs/IComponent";

var TransformComponent: IComponent;
TransformComponent = class {
    static __componentName: string = "TransformComponent";
    position: Vector3;
    rotation: Quaternion;
    scale: number;
}

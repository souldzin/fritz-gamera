import {Component} from "../ecs";

@Component
class PositionComponent {
    constructor(x: number, y: number,z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    x: number;
    y: number;
    z: number;
}

export {PositionComponent};
import {Component} from "./../ecs";

@Component
export class Position {
    constructor(x: number, y: number,z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    x: number;
    y: number;
    z: number;
}

import PlayCubes from "./play-cubes";
import {Component, Entity} from "./ecs";

@Component
class Position {
    constructor(x: number, y: number,z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    x: number;
    y: number;
    z: number;
}

var testEntity = new Entity()
    .add(new Position(0, 0, 0));

console.log(testEntity.has(Position));
console.log(testEntity);

// const game = new PlayCubes();
// game.start();

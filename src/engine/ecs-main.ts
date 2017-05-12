import {Entity} from "./ecs";
import {Scene} from "./Scene";

// Import Components
import {PositionComponent} from "./components/PositionComponent";
import {TestComponent} from "./components/TestComponent";

// Import Systems
import {PositionSystem} from "./systems/PositionSystem";
import {TestComponentSystem} from "./systems/TestComponentSystem";

const scene = new Scene([], []);

var testEntity1 = new Entity("A")
    .add(new PositionComponent(0, 0, 0))
    .add(new TestComponent("Woah!"));

var testEntity2 = new Entity("B")
    .add(new PositionComponent(1, 1, 1));

scene.addEntities([testEntity1, testEntity2]);

const positionSystem = new PositionSystem();
const testComponentSystem = new TestComponentSystem();

scene.addSystems([positionSystem, testComponentSystem]);

scene.update(1);

// const gameLoop = () => {
//     setTimeout(() => {
//         gameEngine.update();
//         gameLoop();
//     }, 10000);
// } 

// gameLoop();

// const game = new PlayCubes();
// game.start();

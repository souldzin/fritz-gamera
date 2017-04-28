import {Entity, EntityStore, Engine} from "./ecs";

// Import Components
import {Position} from "./components/PositionComponent";
import {TestComponent} from "./components/TestComponent";

// Import Systems
import {PositionSystem} from "./systems/PositionSystem";
import {TestComponentSystem} from "./systems/TestComponentSystem";

const entityStore = new EntityStore();
const gameEngine = new Engine(entityStore);

var testEntity1 = new Entity()
    .add(new Position(0, 0, 0))
    .add(new TestComponent("Woah!"));

var testEntity2 = new Entity()
    .add(new Position(1, 1, 1));

entityStore
    .add(testEntity1)
    .add(testEntity2);

const positionSystem = new PositionSystem();
const testComponentSystem = new TestComponentSystem();

gameEngine
    .addSystem(positionSystem)
    .addSystem(testComponentSystem);

gameEngine.update();

// const gameLoop = () => {
//     setTimeout(() => {
//         gameEngine.update();
//         gameLoop();
//     }, 10000);
// } 

// gameLoop();

// const game = new PlayCubes();
// game.start();

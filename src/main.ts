import {SystemManager, Entity, IComponent, ISystem} from "./ecs";
import {TransformComponent} from "./components/TransformComponent";
import {RotateRandomSystem} from "./systems/RotateRandomSystem";
import {Vector3, Quaternion} from "three";

const systemManager = new SystemManager();

const cubeEntity = new Entity();
cubeEntity.add(new TransformComponent(
    new Vector3(0, 0, 0),
    new Quaternion(0, 0, 0),
    1
));

systemManager.addEntity(cubeEntity, "cube1");
systemManager.addSystem(new RotateRandomSystem());


import {ISystem, Aspect, Entity} from "./../ecs";
import {Position} from "./../components/PositionComponent";

interface PositionSystemEntity {
    position: Position;
}

const PositionSystemAspect =
    new Aspect()
        .all(Position);

export class PositionSystem implements ISystem<PositionSystemEntity> {
    aspect = PositionSystemAspect;

    entityProjection = (entity: Entity): PositionSystemEntity => {
        const position = entity.get(Position);
        return {
            position: position
        }
    }

    onStart = () => {

    }

    onUpdate = (entity: PositionSystemEntity) => {
        entity.position.x = entity.position.x + 1;
        console.log("processing entity in position system", entity.position.x);
    }

    onEnd = () => {

    }
}

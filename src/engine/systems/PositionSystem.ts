import {System, Aspect, Entity} from "../ecs";
import {PositionComponent} from "../components";

interface PositionSystemEntity {
    position: PositionComponent;
}

const PositionSystemAspect =
    new Aspect()
        .all(PositionComponent);

export class PositionSystem implements System {
    private entityProjection = (entity: Entity): PositionSystemEntity => {
        const position = entity.getComponent(PositionComponent);
        return { 
            position: position 
        };
    }

    public update = (tick: Number, entities: Entity[]) => {
        var posEntities = entities
            .filter(PositionSystemAspect.check)
            .map(this.entityProjection)
            .forEach(this.updateEntity.bind(this, tick));
    }

    private updateEntity = (tick: Number, entity: PositionSystemEntity) => {
        entity.position.x = entity.position.x + 1;
        console.log("processing entity in position system", entity.position.x);
    }
}

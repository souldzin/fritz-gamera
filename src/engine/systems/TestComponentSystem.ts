import {System, Aspect, Entity} from "./../ecs";
import {TestComponent} from "./../components/TestComponent";

interface TestComponentSystemEntity {
    prop: TestComponent;
}

const TestComponentSystemAspect = 
    new Aspect()
        .all(TestComponent);

export class TestComponentSystem implements System {
    private entityProjection = (entity: Entity): TestComponentSystemEntity => {
        const testComponent = entity.getComponent(TestComponent);
        return {
            prop: testComponent
        }
    }

    public update = (tick: Number, entities: Entity[]) => {
        return entities
            .filter(TestComponentSystemAspect.check)
            .map(this.entityProjection)
            .forEach(this.updateEntity.bind(this, tick));
        
    }

    private updateEntity = (tick: Number, entity: TestComponentSystemEntity) => {
        console.log("processing entity in test component system", entity);
    }
}

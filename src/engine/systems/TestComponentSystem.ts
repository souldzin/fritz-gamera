import {ISystem, Aspect, Entity} from "./../ecs";
import {TestComponent} from "./../components/TestComponent";

interface TestComponentSystemEntity {
    prop: TestComponent;
}

const TestComponentSystemAspect = 
    new Aspect()
        .all(TestComponent);

export class TestComponentSystem implements ISystem<TestComponentSystemEntity> {
    aspect = TestComponentSystemAspect;

    entityProjection = (entity: Entity): TestComponentSystemEntity => {
        const testComponent = entity.get(TestComponent);
        return {
            prop: testComponent
        }
    }

    onStart = () => {

    }

    onUpdate = (entity: TestComponentSystemEntity) => {
        console.log("processing entity in test component system", entity);
    }

    onEnd = () => {

    }
}

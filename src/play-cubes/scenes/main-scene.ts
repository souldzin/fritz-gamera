import { Scene, Entity, EntityMapper, RenderComponent } from "@fritz/engine";
import {
    CameraComponent,
    MeshComponent,
    PositionComponent,
    VelocityComponent
} from "./../components";

interface CubeView {
    mesh: MeshComponent;
    position: PositionComponent;
    velocity: VelocityComponent;
}

class CubeViewMapper extends EntityMapper<CubeView> {
    public canMap(e:Entity): boolean {
        return [MeshComponent, PositionComponent, VelocityComponent].every(e.getComponent);
    }

    public map(e:Entity): CubeView {
        return {
            mesh: e.getComponent(MeshComponent),
            position: e.getComponent(PositionComponent),
            velocity: e.getComponent(VelocityComponent)
        };
    }
}

interface CameraView {
    camera: CameraComponent;
}

class CameraViewMapper extends EntityMapper<CameraView> {
    public map(e:Entity): CameraView {
        return {
            camera: e.getComponent(CameraComponent)
        };
    }
}

function getComponents(obj:any) {
    return Object.keys(obj).map(k => obj[k]);
}

function createCameraEntity() {
    return new Entity("CameraEntity")
        .add(new CameraComponent());
}

function createCubeEntity() {
    return new Entity("CubeEntity", getComponents({
        mesh: new MeshComponent(),
        position: new PositionComponent(),
        velocity: new VelocityComponent()
    }));
}

function isCubeEntity(entity:Entity) {
    return 
}

namespace MainSceneBuilder {
    export function build():Scene {
        return new Scene({
            systems: [],
            entities: [
                createCameraEntity(),
                createCubeEntity()
            ]
        });
    }
}

const CubeViewMapperInstance = new CubeViewMapper();
const CameraViewMapperInstance = new CameraViewMapper();

export { 
    MainSceneBuilder, 
    CubeView, 
    CameraView,
    CubeViewMapperInstance as CubeViewMapper, 
    CameraViewMapperInstance as CameraViewMapper
};
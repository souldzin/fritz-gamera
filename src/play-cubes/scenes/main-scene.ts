import { Scene, Entity, RenderComponent } from "@fritz/engine";
import {
    CameraComponent,
    MeshComponent,
    PositionComponent,
    VelocityComponent
} from "./../components";

function createCameraEntity() {
    return new Entity("CameraEntity")
        .add(new CameraComponent());
}

function createCubeEntity() {
    return new Entity("CubeEntity")
        .add(new MeshComponent())
        .add(new PositionComponent())
        .add(new VelocityComponent());
}

function build():Scene {
    return new Scene({
        systems: [],
        entities: [
            createCameraEntity(),
            createCubeEntity()
        ]
    });
}

export { build };
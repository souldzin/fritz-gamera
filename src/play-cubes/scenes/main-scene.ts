import { Scene, Entity, RenderComponent } from "@fritz/engine";

function build():Scene {
    return new Scene([], [new Entity("1", [new RenderComponent()])]);
}

export { build };
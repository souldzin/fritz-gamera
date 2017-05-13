import {expect} from "chai";
import {Scene} from "@fritz/engine";
import {
    MainSceneBuilder,
    CameraViewMapper,
    CubeViewMapper
} from "./main-scene";
import {
    CameraComponent,
    MeshComponent,
    PositionComponent,
    VelocityComponent
} from "./../components";

// Camera entity
    // CameraComponent
        // -- Perpective
        // -- Focal Lens
    // PositionComponent - where am I in game world?
    // RotationComponent - where am I facing in the game world?
// Cube Entity
    // PositionComponent
    // RotationComponent
    // MeshComponent
        // Geometry  
        // Material

describe("play-cubes/scenes/main-scene", function(){
    var scene : Scene;

    beforeEach(function(){
        scene = MainSceneBuilder.build();
    });

    it('has Camera entity', () => {
        var cameraEntities = scene.entities()
            .filter(x => CameraViewMapper.canMap(x));

        expect(cameraEntities.length).to.be.greaterThan(0);
    });

    it('has Rotating Cube entity', () => {
        var cubeEntities = scene.entities()
            .filter(x => !CameraViewMapper.canMap(x))
            .filter(x => CubeViewMapper.canMap(x));

        expect(cubeEntities.length).to.be.greaterThan(0);
    });

    xit('updates Cube position after update', () => {
        // After n updates - cube should be in x position

    });
});
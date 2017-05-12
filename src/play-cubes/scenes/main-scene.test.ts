import {expect} from "chai";
import {Scene, RenderComponent} from "@fritz/engine";
import * as MainSceneBuilder from "./main-scene";

describe("play-cubes/scenes/main-scene", function(){
    var scene : Scene;

    beforeEach(function(){
        scene = MainSceneBuilder.build();
    });

    it('has a render entity', function(){
        var renderEntities = scene.entities().filter((e) => e.getComponent(RenderComponent) != null);

        expect(renderEntities.length).to.be.greaterThan(0);
    })
});
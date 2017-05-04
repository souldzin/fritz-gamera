import {expect} from "chai";
import Scene from "@fritz/engine/scene";
import mainScene from "./main-scene";

describe("play-cubes/scenes/main-scene", function(){
    var scene : Scene;

    beforeEach(function(){
        scene = mainScene();
    });

    describe(".start", function(){
        it("if null ticker is given - returns error observable");
        it("if ticker is given - subscribes to the given 'ticker'");
    });
});
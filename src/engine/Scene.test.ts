import * as chai from "chai";
import * as ChaiSpies from "chai-spies";
import {Scene} from "./Scene";
import {System, SystemStub, Entity} from "./ecs";

chai.use(ChaiSpies);

const expect = chai.expect;

describe("engine/scene", function(){
    var system: System;
    var entity: Entity;
    var scene: Scene;

    beforeEach(function(){
        system = new SystemStub();
        entity = new Entity("1", [{ power: 9001 }]);
        scene = new Scene({
            systems: [system],
            entities: [entity]
        });
    });

    describe(".ctor", function(){
        it("initializes systems and creates entities with ids", function(){
            expect(scene.entities()).to.eql([entity], "Expected scene.entities to equal the given entities");
            expect(scene.systems()).to.eql([system], "Expected scene.systems to equal the given systems");
        });
    });
    describe(".addEntities", function(){
        it("with null, does nothing", function(){
            var expectation = scene.entities().concat([]);

            scene.addEntities(null);

            expect(scene.entities()).to.eql(expectation, "Expected scene.entities to not change");
        });
        it("with array, adds to scene.entities", function(){
            var source = [
                new Entity("2", [{ power: 100 }]), 
                new Entity("3", [{ power: -1 }])
            ];
            var expectation = scene.entities().concat(source);

            scene.addEntities(source);

            expect(scene.entities()).to.eql(expectation, "Expected new entities to be appended to the scene.entities");
        });
    });
    describe(".addSystems", function(){
        it("with null, does nothing", function(){
            var expectation = scene.systems().concat([]);

            scene.addSystems(null);

            expect(scene.systems()).to.eql(expectation, "Expected scene.systems to not change");
        });
        it("with array, adds to scene.systems", function(){
            var source = [new SystemStub(), new SystemStub()];
            var expectation = scene.systems().concat(source);

            scene.addSystems(source);

            expect(scene.systems()).to.eql(expectation, "Expected new systems to be appended to the scene.systems");
        });
    });
    describe(".update", function(){
        it("calls update on each system with the current entities", function(){
            var source = [new SystemStub(), new SystemStub()];

            scene.addSystems(source);
            scene.systems().forEach(s => chai.spy.on(s, "update"));

            scene.update(1);

            scene.systems().forEach(s => expect(s.update).to.called.with(1, scene.entities()));
        });
    });
});
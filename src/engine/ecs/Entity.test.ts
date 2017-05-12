import {expect} from "chai";
import {Entity} from "./Entity";

class DummyComponent {

}

describe("engine/ecs/entity", function(){
    describe(".getComponent", function(){
        it("returns the component specified by the ctor", function(){
            var comp = new DummyComponent();
            var entity = new Entity("1", [comp]);
            var actual = entity.getComponent(DummyComponent);

            expect(actual).to.equal(comp);
        })
    })
})
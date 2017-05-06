import {expect} from "chai";
import {Entity} from "./Entity";

describe("engine/ecs/entity", function(){
    describe(".getComponent", function(){
        it("returns the component specified by the ctor", function(){
            var comp = new String("abc");
            var entity = new Entity("1", [comp]);
            var actual = entity.getComponent(String);

            expect(actual).to.equal(comp);
        })
    })
})
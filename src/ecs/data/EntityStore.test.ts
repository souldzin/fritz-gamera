import {IComponent} from "../IComponent";
import {Entity} from "../Entity";
import {EntityStore} from "./EntityStore";
import {expect} from "chai";

describe("", () => {
    const store = new EntityStore();
    const entityId = "UNIQUE_ID";
    const entity = new Entity();

    it("initialize with an empty store", () => {
        expect(store.getEntityCount()).to.equal(0);
    });    

    it("adds entity to store", () => {
        store.addEntity(entity, entityId);
        expect(store.getEntityCount()).to.equal(1);
        expect(Object.keys(store.getComponentEntityLookup()).length).to.equal(0);
    });

    it('adds lookup record when entity adds component', () => {
        const component = new SampleComponent();
        component.sampleData = "Woah!";
        entity.add(component);
        expect(Object.keys(store.getComponentEntityLookup()).length).to.equal(1);
    });

    it('removes lookup record when entity removes component', () => {
        entity.remove(SampleComponent);
        expect(Object.keys(store.getComponentEntityLookup()).length).to.equal(0);
    });

    it('removes entity from store', () => {
        store.removeEntity(entityId);
        expect(store.getEntityCount()).to.equal(0);
    });
});


const getSampleEntity = () => {
    const entity = new Entity();
    const sampleComponent = new SampleComponent();
    sampleComponent.sampleData = "Woah!";
    entity.add(entity);
    return entity;
}

class SampleComponent implements IComponent {
    sampleData: string;
}

import {Entity} from "."

abstract class EntityMapper<T extends any> {
    public canMap(e: Entity): boolean {
        let obj = this.map(e);

        // obj is not null & all props are not null
        return obj != null 
            && Object.keys(obj).every(k => obj[k]);
    }

    public abstract map(e: Entity): T;
}

export {EntityMapper};
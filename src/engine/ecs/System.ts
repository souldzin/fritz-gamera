import {Aspect} from "./Aspect";
import {Entity} from "./Entity";

export interface ISystem<T> {
    aspect: Aspect;
    entityProjection: (entity: Entity) => T;
    onStart: () => void;
    onUpdate: (entity: T) => void;
    onEnd: () => void;
}

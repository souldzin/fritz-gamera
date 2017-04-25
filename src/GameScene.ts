import {Entity} from "./Entity";

export class GameScene {
    public entities: Array<Entity> = [];
    public frameDelta: number;
    private scene: THREE.Scene;
    private renderer: THREE.Renderer;

    constructor() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    public addEntity = (entity: Entity) => {
        this.entities.push(entity);
    }

    // private methods
    private onAnimationUpdate = (delta: number) => {
        this.entities.forEach(x => x.onGameTick());
    }
}

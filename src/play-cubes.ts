import * as THREE from "three";
import {Entity} from "./Entity";
import {Component} from "./Component"; 

// const:
// ------------
var MAX_FPS = 1.0 / 60.0;

class CubeComponent extends Component {
    private mesh: THREE.Mesh;
    
    constructor() {
        super();

        const geometry = new THREE.BoxGeometry(20, 20, 20);
        const material = new THREE.MeshPhongMaterial({
            color: "0x3399CC",
            wireframe: false,
            shading: THREE.FlatShading
        });

        this.mesh = new THREE.Mesh(geometry, material);
    }

    onUpdate = (delta: number) => {
        this.mesh.rotateX(.5 * delta);
        this.mesh.rotateY(.5 * delta);
    }
}

export default class Game {
    public entities: Array<Entity> = [];

    private frameDelta: number = 0;
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.Camera;
    private clock: THREE.Clock;

    start = () => {
        this.scene = new THREE.Scene();

        const primaryCamera = this.createCamera();
        primaryCamera.position.x = 0;
        primaryCamera.position.y = 0;
        primaryCamera.position.z = 400;

        this.clock = new THREE.Clock();

        this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        this.renderer.setSize(this.getWidth(), this.getHeight());

        document.body.appendChild(this.renderer.domElement);
        window.addEventListener("resize", this.handleWindowResize, false);

        this.createLights();
        this.entities.forEach(x => x.registerWithScene(this.scene));
    }

    private handleWindowResize = () => {
        this.renderer.setSize(this.getWidth(), this.getHeight());
    }
    
    // Sample Code
    private createSampleEntity = () => {
        const entity = new Entity(new THREE.Vector3(0, 0, 0), 0, 1, true);
        const component = new CubeComponent();
        entity.addComponent(component);
    }

    private registerEntities = () => {
        const entity1 = this.createSampleEntity();
        const entity2 = this.createSampleEntity();
    }

    private createScene = () => {
        const primaryCamera = this.createCamera();
        primaryCamera.position.x;
    };
    
    private createLights = () => {
        // These should be components and wrapped in entities. Not doing this here for the sake of simplicity.
        const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)

        const ambientLight = new THREE.AmbientLight(0xdc8874, .5);

        const shadowLight = new THREE.DirectionalLight(0xffffff, .9);
        shadowLight.position.set(150, 350, 350);
        shadowLight.castShadow = true;
        shadowLight.shadow.mapSize.width = 4096;
        shadowLight.shadow.mapSize.height = 4096;

        this.scene.add(hemisphereLight);
        this.scene.add(shadowLight);
        this.scene.add(ambientLight);
    };

    private createCamera = () => {
        const FOV = 50;
        const NEAR_PLANE = .1;
        const FAR_PLANE = 10000;

        return new THREE.PerspectiveCamera(
            FOV,
            this.getAspectRatio(),
            NEAR_PLANE,
            FAR_PLANE);
    }

    private getWidth = () => 
        window.innerWidth;
    
    private getHeight = () =>
        window.innerHeight;

    public getAspectRatio = () =>
        this.getWidth() / this.getHeight();
}

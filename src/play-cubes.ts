import * as THREE from "three";

// const:
// ------------
var MAX_FPS = 1.0 / 60.0;

export default class Game {
    private frameDelta: number = 0;
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.Camera;
    private clock: THREE.Clock;

    start = () => {
        this.createScene();
        this.createLights();
        this.createObjects();
    }

    private createScene = () => {
    
    };
    
    private createLights = () => {
        
    };
    
    private createObjects = () => {
        
    };
}

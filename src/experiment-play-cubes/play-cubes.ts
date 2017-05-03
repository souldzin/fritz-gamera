import * as THREE from "three";

// const:
// ------------
var MAX_FPS = 1.0 / 60.0;

export default class Game {
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private cube: THREE.Mesh;

    start = () => {
        this.init();
        this.animate();
    }

    private init = () => {
        // init - camera
        var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 400;

        // init - scene
        var scene = new THREE.Scene();
        var cube = this.createCube();
        scene.add(cube);

        // init - renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // add renderer element
        document.body.appendChild(renderer.domElement);

        // listen to window 'resize'
        window.addEventListener('resize', this.onWindowResize, false);

        // save props
        this.scene = scene;
        this.camera = camera;
        this.cube = cube;
        this.renderer = renderer;
    };

    private onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    private animate = () => {
        requestAnimationFrame(this.animate);

        this.cube.rotation.x += 0.005;
        this.cube.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
    }

    private createCube = () => {
        var geom = new THREE.BoxGeometry(200, 200, 200);
        var material = new THREE.MeshBasicMaterial({ color: 0x33aaee });
        return new THREE.Mesh(geom, material);
    };

    private createLights = () => {

    };

    private createObjects = () => {

    };
}

import { Scene, SceneLoader, UniversalCamera, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';
import { applyLighting } from './Lighting.js'; 
import materials from './Materials.js';

class SceneCreator {
  constructor(canvas, engine) {
    this.canvas = canvas;
    this.engine = engine;
    this.scene = new Scene(this.engine);
  }

  async loadAssets(assets) {
    const customMaterials = {};
    for (let materialName in materials) {
        customMaterials[materialName] = materials[materialName](this.scene);
    }

    for (let asset of assets) {
      const result = await SceneLoader.ImportMeshAsync("", "./assets/", `${asset}.glb`, this.scene);
      console.log(`Asset ${asset} loaded`);

      result.meshes.forEach((mesh) => {
        if (mesh.material && customMaterials[mesh.material.name]) {
            mesh.material = customMaterials[mesh.material.name];
        }
        
        // Enable shadows
        this.scene.shadowGenerator.getShadowMap().renderList.push(mesh);
        mesh.receiveShadows = true;

        // Load colliders
        if (asset === 'colliders') {
          mesh.checkCollisions = true;
          mesh.visibility = 0; // Set visibility to 0 for the colliders
        }
      });
    }
  }

  createCamera() {
    const camera = new UniversalCamera("camera", new Vector3(0, 1.75, 0), this.scene);
    camera.attachControl(this.canvas, false);
    camera.position = new Vector3(-16, 8.2, -10); 
    camera.setTarget(Vector3.Zero());
    camera.applyGravity = true;
    camera.checkCollisions = true;
    camera.ellipsoid = new Vector3(0.5, 1, 0.5);
    camera.speed = 0.25; // Set the speed of the camera
    return camera;
}

  async createScene() {
    applyLighting(this.scene); 

    const assets = ["GTMR_low", "yacht_low", "presentoirs_low", "interior", "colliders"];
    await this.loadAssets(assets);

    const camera = this.createCamera();

    this.scene.gravity = new Vector3(0, -9.81, 0); 

    this.scene.debugLayer.show();

    return { scene: this.scene, camera };
  }
}

export function createScene(canvas, engine) {
    const sceneCreator = new SceneCreator(canvas, engine);
    return sceneCreator.createScene();
}
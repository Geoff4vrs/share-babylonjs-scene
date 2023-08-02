import { WebGPUEngine } from 'babylonjs';
import { createScene } from './Scene';

window.onload = async function () {
    const canvas = document.getElementById("renderCanvas");
    const engine = new WebGPUEngine(canvas);
    await engine.initAsync();

    const { scene } = await createScene(canvas, engine);

    scene.executeWhenReady(() => {
        engine.runRenderLoop(function () {
            console.log("Rendering scene");
            scene.render();
        });
    });
};

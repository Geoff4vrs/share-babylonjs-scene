import * as BABYLON from "babylonjs";

function applyLighting(scene, hdrRotationY = 2) {
  // Charger la texture HDRI
  const hdrTexture = new BABYLON.HDRCubeTexture(
    "assets/industrial_sunset_02_puresky_2k.hdr",
    scene,
    512
  );

  // Appliquer la texture HDRI à la scène pour l'éclairage
  scene.environmentTexture = hdrTexture;
  scene.environmentTexture.rotationY = hdrRotationY;

  // Ajuster la force de l'éclairage de la texture HDRI
  scene.environmentIntensity = 0.7; // Augmentez ou diminuez ce nombre pour ajuster la puissance de l'éclairage HDRI

  // Rendre la couleur de fond transparente
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); // Transparent

  // Lumière directionnelle
  let light = new BABYLON.DirectionalLight(
    "dirLight",
    new BABYLON.Vector3(-1, -0.27, 0.03),
    scene
  );
  light.position = new BABYLON.Vector3(20, 20, -20);
  light.intensity = 20;

  // Create a shadow generator
  var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
  shadowGenerator.useBlurExponentialShadowMap = true;
  shadowGenerator.blurKernel = 64;
  
  scene.shadowGenerator = shadowGenerator; // Store the shadow generator in the scene for later use
}

export { applyLighting };
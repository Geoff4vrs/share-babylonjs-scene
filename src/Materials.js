import * as BABYLON from "babylonjs";

export const createCarpetMaterial = (scene) => {
  // Créer le matériau carpet
  const carpetMaterial = new BABYLON.PBRMaterial("carpet", scene);

  // Charger les textures diffuse, normalmap
  const diffuseTexture = new BABYLON.Texture("textures/carpet/CarpetMultiLevelLoopPileGrid001_ALBEDO_1K.jpg", scene);
  const normalTexture = new BABYLON.Texture("textures/carpet/CarpetMultiLevelLoopPileGrid001_NRM_1K.jpg", scene);
  const glossTexture = new BABYLON.Texture("textures/carpet/CarpetMultiLevelLoopPileGrid001_GLOSS_1K.jpg", scene);
  const displacementTexture = new BABYLON.Texture("textures/carpet/CarpetMultiLevelLoopPileGrid001_DISP_1K.jpg", scene);

  // Activer les mipmaps pour les textures
  diffuseTexture.generateMipMaps = true;
  normalTexture.generateMipMaps = true;
  glossTexture.generateMipMaps = true;
  displacementTexture.generateMipMaps = true;

  // Assigner les textures au matériau
  carpetMaterial.albedoTexture = diffuseTexture;
  carpetMaterial.normalTexture = normalTexture;
  carpetMaterial.metallicTexture = glossTexture;
  carpetMaterial.displacementTexture = displacementTexture;

  // Régler les propriétés du matériau
  carpetMaterial.roughness = 0.9;
  normalTexture.level = 1.2;
  carpetMaterial.useParallax = true;
  carpetMaterial.useParallaxOcclusion = true;
  carpetMaterial.parallaxScaleBias = 0.05; // Ajuster la profondeur de l'effet, expérimenter avec différentes valeurs

  return carpetMaterial;
};

export const createFabricLinenMaterial = (scene) => {
  // Créer le matériau fabricLinen
  const fabricLinenMaterial = new BABYLON.PBRMaterial("fabricLinen", scene);

  // Charger les textures diffuse, normalmap
  const diffuseTexture = new BABYLON.Texture("textures/fabricLinen/FabricLinen001_COL_VAR1_1K.jpg", scene);
  const normalTexture = new BABYLON.Texture("textures/fabricLinen/FabricLinen001_NRM_1K.jpg", scene);
  const glossTexture = new BABYLON.Texture("textures/fabricLinen/FabricLinen001_GLOSS_1K.jpg", scene);
  const displacementTexture = new BABYLON.Texture("textures/fabricLinen/FabricLinen001_DISP_1K.jpg", scene);

  // Activer les mipmaps pour les textures
  diffuseTexture.generateMipMaps = true;
  normalTexture.generateMipMaps = true;
  glossTexture.generateMipMaps = true;
  displacementTexture.generateMipMaps = true;

  // Assigner les textures au matériau
  fabricLinenMaterial.albedoTexture = diffuseTexture;
  fabricLinenMaterial.normalTexture = normalTexture;
  fabricLinenMaterial.metallicTexture = glossTexture;
  fabricLinenMaterial.displacementTexture = displacementTexture;

  // Régler les propriétés du matériau
  fabricLinenMaterial.roughness = 0.9;
  normalTexture.level = 1.2;
  fabricLinenMaterial.useParallax = true;
  fabricLinenMaterial.useParallaxOcclusion = true;
  fabricLinenMaterial.parallaxScaleBias = 0.05; // Ajuster la profondeur de l'effet, expérimenter avec différentes valeurs

  return fabricLinenMaterial;
};

export const createParquetMaterial = (scene) => {
  // Créer le matériau de parquet
  const parquetMaterial = new BABYLON.PBRMaterial("parquet", scene);

  // Charger les textures diffuse, normalmap, gloss, displacement et environment
  const diffuseTexture = new BABYLON.Texture("textures/flooring/WoodFlooring041_COL_2K.jpg", scene);
  const normalTexture = new BABYLON.Texture("textures/flooring/WoodFlooring041_NRM_2K.jpg", scene);
  const glossTexture = new BABYLON.Texture("textures/flooring/WoodFlooring041_GLOSS_2K.jpg", scene);
  const displacementTexture = new BABYLON.Texture("textures/flooring/WoodFlooring041_DISP_2K.jpg", scene);

  // Activer les mipmaps pour les textures
  diffuseTexture.generateMipMaps = true;
  normalTexture.generateMipMaps = true;
  glossTexture.generateMipMaps = true;
  displacementTexture.generateMipMaps = true;

  // Assigner les textures au matériau
  parquetMaterial.albedoTexture = diffuseTexture;
  parquetMaterial.normalTexture = normalTexture;
  parquetMaterial.metallicTexture = glossTexture;
  parquetMaterial.displacementTexture = displacementTexture;

  // Régler les propriétés du matériau
  parquetMaterial.roughness = 0.5;
  normalTexture.level = 1.2;
  parquetMaterial.useParallax = true;
  parquetMaterial.useParallaxOcclusion = true;
  parquetMaterial.parallaxScaleBias = 0.05; // Ajuster la profondeur de l'effet, expérimenter avec différentes valeurs

  return parquetMaterial;
};

export const createWoodVeenerMaterial = (scene) => {
  // Créer le matériau de woodVeener
  const woodVeener = new BABYLON.PBRMaterial("woodVeener", scene);

  // Charger les textures diffuse, normalmap, gloss, displacement et environment
  const diffuseTexture = new BABYLON.Texture("textures/wood/WoodFineDark001_COL_2K.jpg", scene);
  const normalTexture = new BABYLON.Texture("textures/wood/WoodFineDark001_NRM_2K.jpg", scene);
  const glossTexture = new BABYLON.Texture("textures/wood/WoodFineDark001_GLOSS_2K.jpg", scene);
  const displacementTexture = new BABYLON.Texture("textures/wood/WoodFineDark001_DISP_2K.jpg", scene);

  // Activer les mipmaps pour les textures
  diffuseTexture.generateMipMaps = true;
  normalTexture.generateMipMaps = true;
  glossTexture.generateMipMaps = true;
  displacementTexture.generateMipMaps = true;

  // Assigner les textures au matériau
  woodVeener.albedoTexture = diffuseTexture;
  woodVeener.normalTexture = normalTexture;
  woodVeener.metallicTexture = glossTexture;
  woodVeener.displacementTexture = displacementTexture;

  // Régler les propriétés du matériau
  woodVeener.roughness = 0.5;
  normalTexture.level = 1.2;
  woodVeener.useParallax = true;
  woodVeener.useParallaxOcclusion = true;
  woodVeener.parallaxScaleBias = 0.05; // Ajuster la profondeur de l'effet, expérimenter avec différentes valeurs

  return woodVeener;
};

export const createCarPaintMaterial = (scene) => {
  var pbr = new BABYLON.PBRMaterial("carPaint", scene);

  // Charger la texture de votre image Perlin Noise
  var perlinTexture = new BABYLON.Texture("textures/perlin.jpg", scene);
  perlinTexture.uScale = 1.5;
  perlinTexture.vScale = 1.5;

  // Assigner la texture de Perlin Noise comme carte de rugosité pour ajouter un effet métallique
  pbr.metallicTexture = perlinTexture;
  pbr.metallicF0Factor = 0.7;
  perlinTexture.generateMipMaps = true;

  // Assigner une couleur de base au matériau
  pbr.albedoColor = new BABYLON.Color3(0.25, 0.16, 0.41);
  pbr.roughness = 0.1;

  // Activer la propriété microSurface pour ajouter de la brillance à l'effet métallique
  pbr.microSurface = 0.1;
  pbr.iridescence.isEnabled = true;

  return pbr;
};

export const createGoldMaterial = (scene) => {
  var gold = new BABYLON.PBRMaterial("gold", scene);

  gold.albedoColor = new BABYLON.Color3(0.3, 0.215, 0.1);
  gold.roughness = 0.3;
  gold.metallic = 1;

  return gold;
};

export const createChromeMaterial = (scene) => {
  var chromeMetal = new BABYLON.PBRMaterial("chromeMetal", scene);

  chromeMetal.albedoColor = new BABYLON.Color3(0.9, 0.9, 0.9);
  chromeMetal.roughness = 0.3;
  chromeMetal.metallic = 1;

  return chromeMetal;
};

export const createYachtHullMaterial = (scene) => {
  var pbr = new BABYLON.PBRMaterial("yachtHull", scene);

  pbr.albedoColor = new BABYLON.Color3(1, 1, 1);
  pbr.metallic = 0.05; // Modifiez cette valeur pour ajuster l'aspect métallique de la peinture
  pbr.roughness = 0.1; // Modifiez cette valeur pour ajuster l'aspect lisse ou rugueux de la peinture

  pbr.clearCoat.isEnabled = true;

  return pbr;
};

export const createMarbleMaterial = (color) => (scene) => {
  if (color !== "white" && color !== "black") {
    throw new Error("Invalid color for marble material, use 'white' or 'black'");
  }

  // Créer le matériau marble
  const marbleMaterial = new BABYLON.PBRMaterial(`marble_${color}`, scene);

  // Charger les textures en fonction de la couleur choisie
  const diffuseTexture = new BABYLON.Texture(`textures/marble/Marble_${color === 'white' ? 'blanc' : 'noir'}_COL_3K.jpg`, scene);
  const normalTexture = new BABYLON.Texture("textures/marble/Marble067_NRM_3K.jpg", scene);

  // Activer les mipmaps pour les textures
  diffuseTexture.generateMipMaps = true;
  normalTexture.generateMipMaps = true;

  // Assigner les textures au matériau
  marbleMaterial.albedoTexture = diffuseTexture;
  marbleMaterial.normalTexture = normalTexture;

  // Régler les propriétés du matériau
  marbleMaterial.roughness = 0.1;
  marbleMaterial.metallic = 0.05;
  normalTexture.level = 1.2;
  marbleMaterial.useParallax = true;
  marbleMaterial.useParallaxOcclusion = true;
  marbleMaterial.parallaxScaleBias = 0.05; // Ajuster la profondeur de l'effet, expérimenter avec différentes valeurs

  return marbleMaterial;
};

export const createLeatherMaterial = (color) => (scene) => {
  const leatherMaterial = new BABYLON.PBRMaterial(`leather_${color}`, scene);

  let diffuseTexture;
  if (color === 'blue') {
    diffuseTexture = new BABYLON.Texture("textures/fabricLeather/FabricLeather001_COL_blue_1k.jpg", scene);
  } else if (color === 'orange') {
    diffuseTexture = new BABYLON.Texture("textures/fabricLeather/FabricLeather001_COL_orange_1K.jpg", scene);
  } else if (color === 'white') {
    diffuseTexture = new BABYLON.Texture("textures/fabricLeather/FabricLeather001_COL_white_1k.jpg", scene);
  }

  const normalTexture = new BABYLON.Texture("textures/fabricLeather/FabricLeather001_NRM_1K.jpg", scene);
  const reflectionTexture = new BABYLON.Texture("textures/fabricLeather/FabricLeather001_REFL_1K.jpg", scene);

  // Activer les mipmaps pour les textures
  diffuseTexture.generateMipMaps = true;
  normalTexture.generateMipMaps = true;
  reflectionTexture.generateMipMaps = true;

  // Assigner les textures au matériau
  leatherMaterial.albedoTexture = diffuseTexture;
  leatherMaterial.normalTexture = normalTexture;
  leatherMaterial.reflectivityTexture = reflectionTexture;

  // Régler les propriétés du matériau
  leatherMaterial.roughness = 0.4;
  leatherMaterial.metallic = 0.05;
  normalTexture.level = 1;
  leatherMaterial.useParallax = true;
  leatherMaterial.useParallaxOcclusion = true;
  leatherMaterial.parallaxScaleBias = 0.05; // Ajuster la profondeur de l'effet, expérimenter avec différentes valeurs

  return leatherMaterial;
};

export const createAlcantaraMaterial = (scene) => {
  var alcantaraPBR = new BABYLON.PBRMaterial("alcantara", scene);

  // Charger la texture perlinBlur comme rugosité
  var perlinBlurTexture = new BABYLON.Texture("textures/perlinBlur.jpg", scene);
  perlinBlurTexture.uScale = 1.5;
  perlinBlurTexture.vScale = 1.5;
  alcantaraPBR.ambientTexture = perlinBlurTexture;
  alcantaraPBR.reflectivityTexture = perlinBlurTexture;
  alcantaraPBR.useMicroSurfaceFromReflectivityMapAlpha = true;
  alcantaraPBR.generateMipMaps = true;

  // Assigner une couleur de base au matériau
  alcantaraPBR.albedoColor = new BABYLON.Color3(0.1, 0.1, 0.1);
  alcantaraPBR.roughness = 0.9;

  return alcantaraPBR;
};

export const createAlcantaraBlueMaterial = (scene) => {
  var alcantaraBluePBR = new BABYLON.PBRMaterial("alcantaraBlue", scene);

  // Charger la texture perlinBlur comme rugosité
  var perlinBlurTexture = new BABYLON.Texture("textures/perlinBlur.jpg", scene);
  perlinBlurTexture.uScale = 1.5;
  perlinBlurTexture.vScale = 1.5;
  alcantaraBluePBR.ambientTexture = perlinBlurTexture;
  alcantaraBluePBR.reflectivityTexture = perlinBlurTexture;
  alcantaraBluePBR.useMicroSurfaceFromReflectivityMapAlpha = true;
  alcantaraBluePBR.generateMipMaps = true;

  // Assigner une couleur de base au matériau
  alcantaraBluePBR.albedoColor = new BABYLON.Color3(0.3, 0.3, 0.5);
  alcantaraBluePBR.roughness = 0.9;

  return alcantaraBluePBR;
};

export const createCarbonMaterial = (scene, textureSize) => {
  var carbonPBR = new BABYLON.PBRMaterial("carbon", scene);

  // Charger la texture diffuse du carbone
  var carbonDiffuseTexture = new BABYLON.Texture("textures/carbon/carbonDiff.png", scene);
  carbonDiffuseTexture.uScale = 80;
  carbonDiffuseTexture.vScale = 80;
  carbonDiffuseTexture.generateMipMaps = true;
  carbonPBR.albedoTexture = carbonDiffuseTexture;

  // Assigner d'autres propriétés du matériau PBR
  carbonPBR.metallic = 0.5;
  carbonPBR.roughness = 0.4;
  carbonPBR.useRadianceOverAlpha = true;
  carbonPBR.useMicroSurfaceFromRadianceOverAlpha = true;

  return carbonPBR;
};

export const createMudMaterial = (scene) => {
  const mudPBR = new BABYLON.PBRMaterial("mud", scene);

  // Charger la texture diffuse de la boue
  const mudDiffuseTexture = new BABYLON.Texture("textures/mudDiff.jpg", scene);
  mudDiffuseTexture.generateMipMaps = true;
  mudPBR.albedoTexture = mudDiffuseTexture;

  // Assigner d'autres propriétés du matériau PBR
  mudPBR.metallic = 0.1;
  mudPBR.roughness = 0.9;

  return mudPBR;
};

export const createAcetateSunriseMaterial = (scene) => {
  const acetateSunrisePBR = new BABYLON.PBRMaterial("acetateSunrise", scene);

  // Charger la texture diffuse de l'acétate "Sunrise"
  const diffuseTexture = new BABYLON.Texture("textures/acetate/textureSunrise.jpg", scene);
  acetateSunrisePBR.albedoTexture = diffuseTexture;

  // Définir les propriétés du matériau PBR
  acetateSunrisePBR.roughness = 0.1;
  acetateSunrisePBR.metallic = 0;
  acetateSunrisePBR.alpha = 0.7;
  acetateSunrisePBR.useAlphaFromAlbedoTexture = true;

  // Activer la réfraction
  acetateSunrisePBR.useRefraction = true;
  acetateSunrisePBR.indexOfRefraction = 1.5;
  acetateSunrisePBR.linkRefractionWithTransparency = true;

  // Ajouter un clearcoat pour les reflets de lumière
  acetateSunrisePBR.clearCoat.isEnabled = true;
  acetateSunrisePBR.clearCoat.roughness = 0.1;
  acetateSunrisePBR.clearCoat.intensity = 0.7;

  return acetateSunrisePBR;
};

export const createAcetateSunsetMaterial = (scene) => {
  const acetateSunsetPBR = new BABYLON.PBRMaterial("acetateSunset", scene);

  // Charger la texture diffuse de l'acétate "Sunset"
  const diffuseTexture = new BABYLON.Texture("textures/acetate/textureSunset.jpg", scene);
  acetateSunsetPBR.albedoTexture = diffuseTexture;

  // Définir les propriétés du matériau PBR
  acetateSunsetPBR.roughness = 0.1;
  acetateSunsetPBR.metallic = 0;
  acetateSunsetPBR.alpha = 0.7;
  acetateSunsetPBR.useAlphaFromAlbedoTexture = true;

  // Activer la réfraction
  acetateSunsetPBR.useRefraction = true;
  acetateSunsetPBR.indexOfRefraction = 1.5;
  acetateSunsetPBR.linkRefractionWithTransparency = true;

  // Ajouter un clearcoat pour les reflets de lumière
  acetateSunsetPBR.clearCoat.isEnabled = true;
  acetateSunsetPBR.clearCoat.roughness = 0.1;
  acetateSunsetPBR.clearCoat.intensity = 0.7;

  return acetateSunsetPBR;
};

export const createAcetateSfumatoMaterial = (scene) => {
  const acetateSfumatoPBR = new BABYLON.PBRMaterial("acetateSfumato", scene);

  // Charger la texture diffuse de l'acétate "Sfumato"
  const diffuseTexture = new BABYLON.Texture("textures/acetate/textureSfumato.jpg", scene);
  acetateSfumatoPBR.albedoTexture = diffuseTexture;

  // Définir les propriétés du matériau PBR
  acetateSfumatoPBR.roughness = 0.1;
  acetateSfumatoPBR.metallic = 0;
  acetateSfumatoPBR.alpha = 0.7;
  acetateSfumatoPBR.useAlphaFromAlbedoTexture = true;

  // Activer la réfraction
  acetateSfumatoPBR.useRefraction = true;
  acetateSfumatoPBR.indexOfRefraction = 1.5;
  acetateSfumatoPBR.linkRefractionWithTransparency = true;

  // Ajouter un clearcoat pour les reflets de lumière
  acetateSfumatoPBR.clearCoat.isEnabled = true;
  acetateSfumatoPBR.clearCoat.roughness = 0.1;
  acetateSfumatoPBR.clearCoat.intensity = 0.7;

  return acetateSfumatoPBR;
};

export const createBrownGlassMaterial = (scene) => {
  const brownGlassPBR = new BABYLON.PBRMaterial("brownGlass", scene);

  // Régler les propriétés du matériau PBR pour un effet de verre
  brownGlassPBR.metallic = 0;
  brownGlassPBR.roughness = 0.1;
  brownGlassPBR.indexOfRefraction = 1.5; // Indice de réfraction pour simuler le verre
  brownGlassPBR.alpha = 0.8; // Transparence du matériau

  // Régler la couleur du verre brun
  brownGlassPBR.albedoColor = new BABYLON.Color3(0.15, 0.1, 0.05);

  // Activer la réflexion pour le verre
  brownGlassPBR.useReflectionFresnel = true;

  return brownGlassPBR;
};

const materials = {
  carpet: createCarpetMaterial,
  fabricLinen: createFabricLinenMaterial,
  parquet: createParquetMaterial,
  woodVeener: createWoodVeenerMaterial,
  carPaint: createCarPaintMaterial,
  yachtHull: createYachtHullMaterial,
  marbleWhite: createMarbleMaterial("white"),
  marbleBlack: createMarbleMaterial("black"),
  leatherWhite: createLeatherMaterial("white"),
  leatherBlue: createLeatherMaterial("blue"),
  leatherOrange: createLeatherMaterial("orange"),
  alcantaraPBR: createAlcantaraMaterial,
  alcantaraBluePBR: createAlcantaraBlueMaterial,
  gold: createGoldMaterial,
  carbonPBR: createCarbonMaterial,
  mudPBR: createMudMaterial,
  acetateSunrisePBR: createAcetateSunriseMaterial,
  acetateSunsetPBR: createAcetateSunsetMaterial,
  acetateSfumatoPBR: createAcetateSfumatoMaterial,
  chromeMetal: createChromeMaterial,
  brownGlassPBR: createBrownGlassMaterial,
};

export default materials;
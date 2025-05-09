import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Light
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(light);

// Load Character
const loader = new GLTFLoader();
loader.load('assets/models/character.glb', (gltf) => {
  const character = gltf.scene;
  character.scale.set(1, 1, 1);
  character.position.set(0, 0, 0);
  scene.add(character);
}, undefined, (error) => {
  console.error('Error loading model:', error);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

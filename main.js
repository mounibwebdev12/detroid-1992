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
// Assuming the model has animations (like walk/idle)
const mixer = new THREE.AnimationMixer(gltf.scene);

// Loop through and add each animation
gltf.animations.forEach((clip) => {
  mixer.clipAction(clip).play();
});

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  // Update animations
  const delta = clock.getDelta();
  mixer.update(delta);

  renderer.render(scene, camera);
}
animate();
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;

document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyW': moveForward = true; break;
    case 'KeyS': moveBackward = true; break;
    case 'KeyA': moveLeft = true; break;
    case 'KeyD': moveRight = true; break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyW': moveForward = false; break;
    case 'KeyS': moveBackward = false; break;
    case 'KeyA': moveLeft = false; break;
    case 'KeyD': moveRight = false; break;
  }
});

function moveCharacter() {
  const speed = 0.1;
  if (moveForward) camera.position.z -= speed;
  if (moveBackward) camera.position.z += speed;
  if (moveLeft) camera.position.x -= speed;
  if (moveRight) camera.position.x += speed;
}

function animate() {
  requestAnimationFrame(animate);

  moveCharacter();

  renderer.render(scene, camera);
}
animate();

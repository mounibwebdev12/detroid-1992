// game.js

// Create a basic scene with a camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Attach renderer to the HTML container
document.getElementById('scene-container').appendChild(renderer.domElement);

// Add a simple cube to the scene (can be replaced with your 3D city and character later)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some basic movement
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the camera's perspective
  renderer.render(scene, camera);
}

animate();
// 1. Keep your existing scene setup (camera, renderer, etc.)
// Create scene
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// 2. Add a ground plane (don't delete your existing objects)
const planeGeometry = new THREE.PlaneGeometry(1000, 1000);  // Large size to serve as the ground
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xAAAAAA, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = - Math.PI / 2;  // Rotate to lay flat on the ground
scene.add(plane);

// 3. Keep the rotating cube or any other test objects you might have
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);  // Example object
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 1, 0);  // Position it slightly above the ground
scene.add(cube);

// 4. Position your camera
camera.position.set(0, 5, 10);  // Adjust camera for better view
camera.lookAt(cube.position);   // Make sure the camera looks at the cube

// 5. Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for a simple animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene and camera view
    renderer.render(scene, camera);
}

animate();

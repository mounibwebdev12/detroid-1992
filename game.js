// Set up basic Three.js scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a simple cube to represent the body (we'll replace this with a character model later)
const bodyGeometry = new THREE.BoxGeometry(1, 2, 0.5);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 }); // Dark color for the shirt
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);

// Add head
const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Bald head color (yellowish)
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1.5; // Position head above body
scene.add(head);

// Camera positioning
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Optional: Rotate character for effect
    body.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();


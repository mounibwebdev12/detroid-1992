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
// Create Car Dealership (simple box for now)
const dealershipGeometry = new THREE.BoxGeometry(10, 5, 10);  // Large box for the building
const dealershipMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF }); // Blue for the dealership
const dealership = new THREE.Mesh(dealershipGeometry, dealershipMaterial);
dealership.position.set(20, 2.5, 0); // Position it in the scene
scene.add(dealership);

// Add a simple sign (text or just a rectangle for now)
const signGeometry = new THREE.PlaneGeometry(6, 2);
const signMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const sign = new THREE.Mesh(signGeometry, signMaterial);
sign.position.set(20, 5, 5);  // Position sign on top of the dealership
scene.add(sign);
// Create a basic road (just a flat plane for now)
const roadGeometry = new THREE.PlaneGeometry(100, 5);  // Road dimensions
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = - Math.PI / 2;  // Make the road flat on the ground
road.position.set(0, 0, 0);  // Position road in the center
scene.add(road);
// Set up basic Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the basic avatar (a simple box for now)
const bodyGeometry = new THREE.BoxGeometry(1, 2, 0.5);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);

const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1.5;
scene.add(head);

// Create Car Dealership (simple box for now)
const dealershipGeometry = new THREE.BoxGeometry(10, 5, 10);
const dealershipMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF });
const dealership = new THREE.Mesh(dealershipGeometry, dealershipMaterial);
dealership.position.set(20, 2.5, 0);
scene.add(dealership);

// Add a simple sign for the dealership
const signGeometry = new THREE.PlaneGeometry(6, 2);
const signMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const sign = new THREE.Mesh(signGeometry, signMaterial);
sign.position.set(20, 5, 5);
scene.add(sign);

// Create a basic house (simple box for now)
const houseGeometry = new THREE.BoxGeometry(8, 6, 8);
const houseMaterial = new THREE.MeshBasicMaterial({ color: 0xAAAAAA });
const house = new THREE.Mesh(houseGeometry, houseMaterial);
house.position.set(-20, 3, 0);
scene.add(house);

// Create a basic road (flat plane)
const roadGeometry = new THREE.PlaneGeometry(100, 5);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = - Math.PI / 2;  // Make it flat
road.position.set(0, 0, 0);
scene.add(road);

// Camera positioning
camera.position.z = 30;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Optional: Rotate character for effect
    body.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();


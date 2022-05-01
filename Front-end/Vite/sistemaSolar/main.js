import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.13, 13, 13);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpeg');
scene.background = spaceTexture;

// Sun

const sunTexture = new THREE.TextureLoader().load('sun.jpeg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(33, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
  })
);

scene.add(sun)

// Mercury

const mercuryTexture = new THREE.TextureLoader().load('mercury.jpeg');

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.116, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
  })
);

scene.add(mercury)
// Venus

const venusTexture = new THREE.TextureLoader().load('venus.jpeg')

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(0.28, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
  })
);

scene.add(venus)
// Earth

const earthTexture = new THREE.TextureLoader().load('earth.jpeg');
const earthNormal = new THREE.TextureLoader().load('earth-normal.tif');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(0.30, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: earthNormal,
  })
);

scene.add(earth);

// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpeg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.076, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
);

scene.add(moon);


// Mars

const marsTexture = new THREE.TextureLoader().load('mars.jpeg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.16, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
  })
);

scene.add(mars)
// Jupter

const jupterTexture = new THREE.TextureLoader().load('jupiter.jpeg')

const jupter = new THREE.Mesh(
  new THREE.SphereGeometry(3.4, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupterTexture,
  })
);

scene.add(jupter)
// Saturn

const saturnTexture = new THREE.TextureLoader().load('saturn.jpeg')

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(2.8, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
  })
);

scene.add(saturn)
// Uranus

const uranusTexture = new THREE.TextureLoader().load('uranus.jpeg')

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(1.2, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
  })
);

scene.add(uranus)
// Neptune

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpeg')

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(1.2, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
  })
);

scene.add(neptune)
// Positions
sun.position.z = -40;
sun.position.x = 2;

mercury.position.z = sun.position.z + 40;
mercury.position.x = -0.15;

venus.position.z = mercury.position.z + 3;
venus.position.x = -0.15;

earth.position.z = venus.position.z + 5;
earth.position.x = -0.15;

moon.position.z = earth.position.z + 1;
moon.position.x = -0.15;

mars.position.z = moon.position.z + 5;
mars.position.x = 0;

jupter.position.z = mars.position.z + 10;
jupter.position.x = -4;

saturn.position.z = jupter.position.z + 10;
saturn.position.x = -4;

uranus.position.z = saturn.position.z + 10;
uranus.position.x = -4;

neptune.position.z = uranus.position.z + 10;
neptune.position.x = -4;
// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  sun.rotation.y += 0.001;
  mercury.rotation.y += 0.001;
  venus.rotation.y += 0.001; 
  earth.rotation.y += 0.001;
  moon.rotation.y += 0.001;
  mars.rotation.y += 0.001;
  jupter.rotation.y += 0.001;
  saturn.rotation.y += 0.001;
  uranus.rotation.y += 0.001;
  neptune.rotation.y += 0.001;
  // controls.update();

  renderer.render(scene, camera);
}

animate();
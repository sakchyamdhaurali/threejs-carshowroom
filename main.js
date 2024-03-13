import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader().setPath('public/lamborghini/');

loader.load('scene.gltf', (gltf)=>{
    const mesh = gltf.scene;
    mesh.position.set(0,2,1.5);
    scene.add(mesh);

  console.log(mesh.getObjectByName('Object_48'));
  if(Object_48){
    object_48.classList.add('tyre');
    console.log('added class name')
  }
  mesh.getObjectByName('Object_48').material.color.setHex(0x006600);

}
);

//renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.outputColorSpace = THREE.SRGBColorSpace;



renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
// render.shadowMap.enabled = true;
// render.shadowMap.type=THREE.PCFSoftShadowMap;

//add renderer to body
document.body.appendChild( renderer.domElement );


//creating a scene
const scene = new THREE.Scene();

//camera

const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1,1000 );
camera.position.set(4,5,11);
camera.lookAt(0,0,0);

//orbit controls

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 14;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();


//plane geometry

const groundGeometry = new THREE.PlaneGeometry( 20,20,32,32);
groundGeometry.rotateX(-Math.PI/2);
const groundMaterial = new THREE.MeshStandardMaterial( {color: 0x555555, side: THREE.DoubleSide} );

const groundMesh = new THREE.Mesh( groundGeometry, groundMaterial );
scene.add( groundMesh );


//animation

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
controls.update();

}
animate();

//lights


// const light = new THREE.PointLight( 0xffffff, 4, 1000 );
// light.position.set( 50, 30, 30 );
// scene.add( light );

const spotLight1 = new THREE.SpotLight( 0xFFFF00, 3,50,0.3,1);
const spotLight2 = new THREE.SpotLight( 0xffffff, 3,500,0.4,0.5);
spotLight1.position.set( 10, 40, 10);
spotLight1.castShadow = true;
spotLight2.position.set(4,40,0);
spotLight2.castShadow = true;
scene.add(spotLight1);
scene.add(spotLight2);

// var helper = new THREE.SpotLightHelper(spotLight1);
// scene.add(helper);s

// button.style.top = '50%';
// button.style.left = '50%';
// button.style.transform = 'translate(-50%, -50%)';

var button = document.getElementById('tireButton');
// Add event listener to the button
button.addEventListener('click', () => {
    // Your event handling code here
    alert('Button clicked!');
});
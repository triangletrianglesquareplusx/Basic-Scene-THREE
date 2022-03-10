'use strict'
//console.log(THREE);
//THREE is the object we have access to at init of THREE.js

//now we need a scene
const scene = new THREE.Scene();
//*all comments here are my notes based on the THREE.js documentation and various presentations. 
//In order for any material to be created we need a MESH
const geometry = new THREE.BoxGeometry(1,1,1);

//the material must receive an object. For now the object will only contain color
const material = new THREE.MeshBasicMaterial({color: 'blue'});

//create the form
const mesh = new THREE.Mesh(geometry,material);

//add it to the scene! otherwise nothing will show up
scene.add(mesh);

//everything has been added to the scene...but now we need a camera. Multiple cameras can be invoked. Like in a movie.
//the first parameter in the camera is the fov - more than 45-50 will cause distortion!!!. We also need the aspect ratio!
const camera = new THREE.PerspectiveCamera(75);
//parameters are needed. The camera must be added to the scene
scene.add(camera);
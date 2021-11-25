import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.skypack.dev/three/examples/jsm/geometries/TextGeometry.js';

const loader = new FontLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.2,
  1000,
);

let mod;
let mod1;
let mod2;
var xSpeed= 0.06;
var zSpeed= 0.06;
var direction= "stop";
var position="stop";
const renderer = new THREE.WebGLRenderer();

let speed = 0.05;
let spotLight;
let objects = [];

document.body.onload = () => {
  main();
  const speedUpBtn = document.querySelector('#speedUp');
  const speedDownBtn = document.querySelector('#speedDown');

};



window.onresize = () => {
  /* if (window.innerWidth > 375) {
        // Mostrarme otra cosa
    } */
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {
  // Configurracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x480b1d,1);
  document.body.appendChild(renderer.domElement);



  var load1 = new THREE.FontLoader();
  var geometry;
  load1.load( './assets/letra2.json', 
      // Crea texto 3D
      function ( font ) {
          geometry = new THREE.TextGeometry('Batman' , {
              font: font,
              size: 0.7,
              height: 1,
              curveSegments: 1,
                bevelEnabled: false,
                  bevelThickness: 1,
                  bevelSize: 0,
                  bevelOffset: 0,
                  bevelSegments: 1
          } );
          // Crear material vectorial normal
          var meshMaterial = new THREE.MeshNormalMaterial({
              flatShading: THREE.FlatShading,
              transparent: false,
              opacity: 100
      });
          var mesh = new THREE.Mesh(geometry, meshMaterial);
          mesh.position.set(-1.5, 2, -8.5);
          scene.add(mesh);
      },
      // Progreso de carga
      function ( xhr ) {
          console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      // se produjo un error
      function (err) {
          console.log(err);
      }
   );

   var load2 = new THREE.FontLoader();
  var geometry;
  load2.load( './assets/letra2.json', 
      // Crea texto 3D
      function ( font ) {
          geometry = new THREE.TextGeometry('Chainsaw Man' , {
              font: font,
              size: 0.7,
              height: 1,
              curveSegments: 1,
                bevelEnabled: false,
                  bevelThickness: 1,
                  bevelSize: 0,
                  bevelOffset: 0,
                  bevelSegments: 1
          } );
          // Crear material vectorial normal
          var meshMaterial = new THREE.MeshNormalMaterial({
              flatShading: THREE.FlatShading,
              transparent: false,
              opacity: 100
      });
          var mesh = new THREE.Mesh(geometry, meshMaterial);
          mesh.position.set(8.5, 1.8, 2);
          mesh.rotation.x=0;
          mesh.rotation.y=-1.5;
          mesh.rotation.z=0;
          scene.add(mesh);
      },
      // Progreso de carga
      function ( xhr ) {
          console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      // se produjo un error
      function (err) {
          console.log(err);
      }
   );

   var load3 = new THREE.FontLoader();
   var geometry;
   load3.load( './assets/letra2.json', 
       // Crea texto 3D
       function ( font ) {
           geometry = new THREE.TextGeometry('Afrodita' , {
               font: font,
               size: 0.7,
               height: 1,
               curveSegments: 1,
                 bevelEnabled: false,
                   bevelThickness: 1,
                   bevelSize: 0,
                   bevelOffset: 0,
                   bevelSegments: 1
           } );
           // Crear material vectorial normal
           var meshMaterial = new THREE.MeshNormalMaterial({
               flatShading: THREE.FlatShading,
               transparent: false,
               opacity: 100
       });
           var mesh = new THREE.Mesh(geometry, meshMaterial);
           mesh.position.set(-2, 2, -7);
           mesh.rotation.x=0;
           mesh.rotation.y=-1.5;
           mesh.rotation.z=0;
           scene.add(mesh);
       },
       // Progreso de carga
       function ( xhr ) {
           console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
       },
       // se produjo un error
       function (err) {
           console.log(err);
       }
    );

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 6;
  camera.position.y = 1.5;

  //modelos
  let loader = new GLTFLoader();

  loader.load(
    'assets/afrodita/scene.gltf',
    function (gltf) {
      mod = gltf.scene.children[0];
      mod.position.y = 0;
      mod.position.x = -7;
      mod.position.z = -8;
      mod.scale.set(0.15,0.15,0.15)
      mod.castShadow=true;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

  let loader2 = new GLTFLoader();

  loader2.load(
    'assets/Batman/scene.gltf',
    function (gltf) {
      mod2 = gltf.scene.children[0];
      mod2.position.y = 0;
      mod2.position.x = 7;
      mod2.position.z = -8;
      mod2.scale.set(1.3,1.3,1.3)
      mod2.castShadow=true;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

  let loader1 = new GLTFLoader();

  loader1.load(
    'assets/Chain/scene.gltf',
    function (gltf) {
      mod1 = gltf.scene.children[0];
      mod1.position.y = 0.8;
      mod1.position.x = 5;
      mod1.position.z = 4.5;
      mod1.scale.set(0.002,0.002,0.002)
      mod1.castShadow=true;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

  

  // Lights
  setupLights();

  let el = drawCube(0xfff00f, false);
  el.position.z = -8.7;
  el.position.x= 0;
  el.position.y = 1.5;
  scene.add(el);
  objects.push(el);

  let el1 = drawCube2(0xfff00f, false);
  el1.position.z = 8.7;
  el1.position.x= 0;
  el1.position.y = 1.5;
  scene.add(el1);
  objects.push(el1);

  let el2 = drawCube3(0xfff00f, false);
  el2.position.z = 0;
  el2.position.x= 8.7;
  el2.position.y = 1.5;
  scene.add(el2);
  objects.push(el2);
  
  let el3 = drawCube4(0xfff00f, false);
  el3.position.z = 0;
  el3.position.x= -8.7;
  el3.position.y = 1.5;
  scene.add(el3);
  objects.push(el3);

  let el4 = drawCube5(0xfff, false);
  el4.position.z = -5.5;
  el4.position.x= -2;
  el4.position.y = 1.5;
  scene.add(el4);
  objects.push(el4);

  let el5 = drawCube6(0xfff, false);
  el5.position.z = 0;
  el5.position.x= 5.5;
  el5.position.y = 1.5;
  scene.add(el5);
  objects.push(el5);

  let el6 = drawCube7(0xfff, false);
  el6.position.z = 5.5;
  el6.position.x= -2;
  el6.position.y = 1.5;
  scene.add(el6);
  objects.push(el6);

  camera.lookAt(el.position);

  let plane2 = video(3, 2,4,4, 0x404040)
  plane2.position.x= 3.5
  plane2.position.y= 1.5
  plane2.position.z= -8.4
  scene.add(plane2);
  objects.push(plane2);

  let plane = drawPlane(18, 18, 10, 10, 0x404040, true);
  plane.rotation.x = Math.PI / 2;
  
  scene.add(plane);

  // let plane2 = drawPlane2(3, 2,4,4, 0x404040, true);
  // plane2.position.x= 2.2
  // plane2.position.y= 1.5
  // plane2.position.z= -5.7
  // scene.add(plane2);
  

  let plane3 = video2(3, 2,4,4, 0x404040, true);
  plane3.position.x= 5.5
  plane3.position.y= 1.5
  plane3.position.z= 0.3
  scene.add(plane3);
  objects.push(plane3);

  let plane4 = video3(3, 2,4,4, 0x404040, true);
  plane4.position.x= -4.5
  plane4.position.y= 1.7
  plane4.position.z= -8.4
  scene.add(plane4);
  objects.push(plane4);

  Audio();
  animate();
  render();
 
  // rotate();
}


function drawPlane(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
   color,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  return plane;
}

// function drawPlane2(w, h, sh, sw, color, ds = false) {
//   const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
//   const material = new THREE.MeshPhongMaterial({
//     color,
//     side: ds ? THREE.DoubleSide : undefined,
//   });
//   const plane = new THREE.Mesh(geometry, material);
//   plane.receiveShadow = true;
//   return plane;
// }

function video(w, h, sh, sw, color) {
  const video = document.getElementById('video');
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshBasicMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;

  return plane;
}
// function drawPlane3(w, h, sh, sw, color, ds = false) {
//   const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
//   const material = new THREE.MeshPhongMaterial({
//     color,
//     side: ds ? THREE.DoubleSide : undefined,
//   });
//   const plane = new THREE.Mesh(geometry, material);
//   plane.receiveShadow = true;
//   return plane;
// }

function video2(w, h, sh, sw, color) {
  const video = document.getElementById('video2');
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshBasicMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;

  return plane;
}

// function drawPlane4(w, h, sh, sw, color, ds = false) {
//   const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
//   const material = new THREE.MeshPhongMaterial({
//     color,
//     side: ds ? THREE.DoubleSide : undefined,
//   });
//   const plane = new THREE.Mesh(geometry, material);
//   plane.receiveShadow = true;
//   return plane;
// }

function video3(w, h, sh, sw, color) {
  const video = document.getElementById('video3');
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshBasicMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;

  return plane;
}



function drawCube(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(18,3,0.5);
  const texture = new THREE.TextureLoader().load("./assets/textura1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: 0x3ff2ff,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}
function drawCube2(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(18,3,0.5);
  const texture = new THREE.TextureLoader().load("./assets/textura1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: 0x3ff2ff,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCube3(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(0.5,3,18);
  const texture = new THREE.TextureLoader().load("./assets/textura1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: 0x3ff2ff,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCube4(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(0.5,3,18);
  const texture = new THREE.TextureLoader().load("./assets/textura1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: 0x3ff2ff,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCube5(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(0.5,3,6);
  const texture = new THREE.TextureLoader().load("./assets/foto1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCube6(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(6,3,0.5);
  const texture = new THREE.TextureLoader().load("./assets/foto1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCube7(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(0.5,3,6);
  const texture = new THREE.TextureLoader().load("./assets/foto1.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function Audio() {
  const listener = new THREE.AudioListener();
  camera.add( listener );
  
  // create a global audio source
  const sound = new THREE.Audio( listener );
  
  // load a sound and set it as the Audio object's buffer
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load('./assets/Cancion 1 assets.mp3' , function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( -0.01 );
    sound.play();
  });
  }


function render() {
  requestAnimationFrame(render);
  if(direction=="right"){
    camera.position.x -= xSpeed;  
  } else if (direction=="left"){
    camera.position.x += xSpeed;
  } else if (direction=="front"){
    camera.position.z += zSpeed;
  } else if (direction=="behind"){
    camera.position.z -= zSpeed;
  } 
  else {
  }
  renderer.render(scene, camera);
};

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    // Izquierda
    if (keyCode == 37) {
      if (direction=="left"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "right";
      }
    // Derecha
    } else if (keyCode == 39) {
      if (direction=="right"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "left";
      }
    }
   //Frente
    else if (keyCode == 38) {
      if (direction=="front"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "behind";
      }
    }
    //Atras
    else if (keyCode == 40) {
      if (direction=="behind"){
        direction= "stop";
      } else if (direction=="stop"){
        direction= "front";
      }
    }
};

// function rotate(){
//   requestAnimationFrame(render);
//   if(position="right"){
//     camera.rotate.z +=speed;
//    } else if(position="left")
//     camera.rotate.z -=speed
//     else {
//     }
//     renderer.rotate(scene, camera);
//   };

//     document.addEventListener("keydown", RotateCamera, false);
// function RotateCamera(event) {
//     var keyCode = event.which;
//     // Izquierda
//     if (keyCode == 65) {
//       if (position=="left"){
//         position= "stop";
//       } else if (position=="stop"){
//         position= "right";
//       }
//     // Derecha
//     } else if (keyCode == 68) {
//       if (position=="right"){
//         position= "stop";
//       } else if (position=="stop"){
//         position= "left";
//       }
//     }
// };
  
window.addEventListener("keydown", (e)=> {
let tecla=e.key
console.log(e.key);
switch(tecla){
//   case 'ArrowRight':

// camera.position.x=camera.position.x+0.3;
// break;

// case 'ArrowLeft':
// camera.position.x=camera.position.x-0.3;
//   break;

// case 'ArrowUp':
// camera.position.z=camera.position.z-0.3;
//   break;
 
// case 'ArrowDown':
// camera.position.z=camera.position.z+0.3;
//   break;

  case 'd':
camera.rotation.y=camera.rotation.y-0.1;
  break;
  case 'a':
camera.rotation.y=camera.rotation.y+0.1;
  break;
  default:
  break;
}
}
)


function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.position.set(0, 15, 0);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.1;
  spotLight.decay = 2;
  spotLight.distance = 200;

  spotLight.castShadow = true;
  scene.add(spotLight);

  /* lightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(lightHelper); */
}



function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  
}

function speedUp() {
  speed += 0.01;
}

function speedDown() {
  speed -= 0.01;
}
var scene = new THREE.Scene();
    
var camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor(0xffffff, 0);
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () =>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  
  camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();


var geometry = new THREE.BoxGeometry(1, 1 ,1);
var material = new THREE.MeshLambertMaterial({color: 0x00ffff, refractionRatio: 1});



var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 1.5;
  mesh.position.y = 0;
  mesh.position.z = 0;
  scene.add(mesh);


var light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(-10,-25,0);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 2, 1000);
light.position.set(25,25,25);
scene.add(light);

var render = function() { 
  requestAnimationFrame(render);
  mesh.rotation.x += 0.005;
  renderer.render(scene,camera);
}

function onMouseMove(event){
  event.preventDefault();
  
  mouse.x = ( event.clientX / window.innerWidth ) *2 -1;
  mouse.y = - ( event.clientY / window.innerHeight ) *2 +1;
  
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children, true);
  for(var i= 0; i < intersects.length; i++){
    // intersects[i].object.material.color.set(0x9FF0000)
    this.tl = new TimelineMax();
    this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut});
    this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut});
    this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.easeOut});
    this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5");
  }
}

render();

document.body.addEventListener('mousemove', onMouseMove);
// document.body.addEventListener('click', onMouseMove);

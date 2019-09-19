import * as THREE from 'three/src/Three';

import {Stats} from 'three/examples/jsm/libs/stats.module.js';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

//'examples/js/loaders/GLTFLoader.js';

export class Bodylymphatic3d {

  urls = {
    skeletonlymphatic:"https://filedn.com/lHGc7w3H4jOpIe46u1nPt57/skeletonlymphatic.gltf",
    lungs:"https://filedn.com/lHGc7w3H4jOpIe46u1nPt57/lungs.gltf",
    liver:"https://filedn.com/lHGc7w3H4jOpIe46u1nPt57/liver.gltf",

        }

  constructor(){

    let progresstxt =' 0% loaded';

    this.onWindowResize = event =>
    {
      var w = window.innerWidth;
      var h = window.innerWidth * 9 / 16 * 0.91;
      this.camera.aspect = w/h;
      this.camera.updateProjectionMatrix();
      //console.log('resize camera position',this.camera.position);
      //console.log('resize camera rotation',this.camera.rotation);
      this.renderer.setSize( w, h );    }
  }

attached(){
  this.scene = new THREE.Scene();
  var w = window.innerWidth;
  var h = window.innerWidth * 9 / 16 * 0.91;
  console.log('attached w,h',w,h);
  this.camera = new THREE.PerspectiveCamera( 32, w/h, 0.2, 3000 );
  this.camera.position.set( -350, 10, 2321 );

  this.camera.rotation.set(-.02,-0.08,-0.001);
  this.light = new THREE.DirectionalLight('white',0.8);
  this.light.position.set(0.4,1.1,20);
  this.light2 = new THREE.DirectionalLight('white',0.5);
  this.light2.position.set(0.4,1.1,-30);
  //this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );

  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize(w, h);
  //this.renderer.setSize( this.canvas.innerWidth, this.canvas.innerHeight );
  this.canvas.appendChild(this.renderer.domElement)

  //this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //this.material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
//  this.cube = new THREE.Mesh( this.geometry, this.material );
//  this.scene.add( this.cube );
// Instantiate a loader
//  let loader = new GLTFLoader().setPath( 'models/');

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
//  var dracoLoader = new THREE.DRACOLoader();
//  dracoLoader.setDecoderPath( '/examples/js/libs/draco' );
//  loader.setDRACOLoader( dracoLoader );
// Load a glTF resource
  window.that = this;

  let loader = new GLTFLoader();
  loader.load(
    // resource URL
    //'models/scene5.gltf',
    this.urls.skeletonlymphatic,
    // called when the resource is loaded
    function ( gltf ) {
      //gltf.scene.traverse( function ( child ) {

//        if ( child.isMesh ) {

//          child.material.envMap = envMap;

//        }

      //} );
      //gltf.cameras = [window.that.camera];
      //gltf.scene.rotateX(90*Math.PI/180);
      gltf.scene.rotateZ(90*Math.PI/180);


      window.that.scene.add( gltf.scene );
      window.that.scene.add(window.that.light);
      window.that.scene.add(window.that.light2);
      window.that.scene.add(window.that.camera);
      //gltf.animations; // Array<THREE.AnimationClip>
      //gltf.scene; // THREE.Scene
      //gltf.scenes; // Array<THREE.Scene>
      //gltf.cameras; // Array<THREE.Camera>
      //gltf.asset; // Object
      window.that.progresstxt='';
    },
    // called while loading is progressing
    function ( xhr ) {

      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      window.that.progresstxt=' '+ ( xhr.loaded / xhr.total * 100 ) + '% loaded'

    },
    // called when loading has errors
    function ( error ) {

      console.log( 'An error happened',error );
      window.that.progresstxt+='An error happened '+error;

    });


  /*let loader = new OBJLoader();

// load a resource
  loader.load(
    // resource URL
    'models/scene21.obj',
    // called when resource is loaded
    function ( object ) {

      window.that.scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

      console.log( 'An error happened',error );

    }
  );*/
  this.renderer.gammaOutput = true;
  this.renderer.gammaFactor = 2.2;
  let controls = new OrbitControls( this.camera, this.renderer.domElement );
  controls.target.set( 0, 0, 1000 );
  //controls
  controls.update();

  window.addEventListener( 'resize', this.onWindowResize, false );
  //this.camera.position.z = 5;

  //this.stats = Stats();
  //this.canvas.appendChild( this.stats.dom );

  this.animate()
}

  animate() {
    //window.that.scene.rotation.x += 0.01;
    //window.that.scene.rotation.y += 0.01;
    window.requestAnimationFrame( window.that.animate );
    window.that.renderer.render( window.that.scene, window.that.camera );
    //window.that.stats.update()
  }

}

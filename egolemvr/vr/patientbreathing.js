//import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from './three.js';

export class Patientbreathing {
  attached() {
    //let this = {};
    this.scene = new THREE.Scene();
    let w = window.innerWidth;
    let h = window.innerWidth * 9 / 16 * 0.91;

    this.camera = new THREE.PerspectiveCamera( 32, w / h, 0.2, 5000 );

    /*this.camera.position.set( -350, 10, 2321 );*/

    this.camera.position.set(-0, 0, 180);
    this.light = new THREE.DirectionalLight('white', 0.8);//new THREE.DirectionalLight('white', 0.8);
    this.light.position.set(0, 1, 600);

    this.light2 = new THREE.AmbientLight('white', 0.2);
    this.light2.position.set(0.4, 1.1, -300);

    this.renderer = new THREE.WebGLRenderer();
    this.api.setRenderer(this.renderer);
    this.renderer.setSize(w, h);
    this.pixelratio = window.devicePixelRatio;
    if (this.pixelratio && this.pixelratio > 0) this.renderer.setPixelRatio(this.pixelratio);

    //
    this.canvas = document.getElementById('canvas');
    this.canvas.appendChild(this.renderer.domElement);

    window.that = this;
    window.that.scene.add(window.that.light);
    window.that.scene.add(window.that.light2);
    window.that.scene.add(window.that.camera);

/*
    this.loadobjects([objects3d.skinskeleton])
      .then(x=>{
        //this.scheduleblink();
      });

 */
    this.loadGltf('./vpacient.gltf');
    //TODO add other objects
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;
    //webxr enable
    this.renderer.xr.enabled = true;
    this.controls = this.declareOrbitControls();

    this.controls.update();

    window.addEventListener( 'resize', this.onWindowResize, false );
    this.animate();
    //setInterval(this.blink,200)
    //this.scheduleblink();
    //webxr add button
    document.body.appendChild( VRButton.createButton( this.renderer ) );
  }

  loadGltf(myurl){
    if (!this.loader) this.loader = new GLTFLoader();
    this.loader.load(
      myurl,
      function( gltf ) {
        //gltf.scene.rotation.set(Math.PI, -0*Math.PI,0.5*Math.PI);
        gltf.scene.rotateZ(0.5 * Math.PI);
        //gltf.scene.position.set(-300,0,-800)
        window.that.scene.add( gltf.scene );
        window.that.progresstxt = '';
        window.that.loadobjects2();
      },
      // called while loading is progressing
      function( xhr ) {
        //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        window.that.progresstxt = ' ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded';
      },
      // called when loading has errors
      function( error ) {
        //console.log( 'An error happened', error );
        window.that.progresstxt += 'An error happened ' + error;
      });

  }
}

import * as THREE from 'three/src/Three';

import {Stats} from 'three/examples/jsm/libs/stats.module.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

import * as objects3d from './objects3d.json';
import {HttpClient} from 'aurelia-fetch-client';

//'examples/js/loaders/GLTFLoader.js';
import {inject} from 'aurelia-framework';
import {OrbitControls} from './OrbitControls2';

@inject(HttpClient)
export class Scene3d {
  constructor(httpclient) {
    this.progresstxt = ' 0% loaded';
    this.httpclient = httpclient;
    this.onWindowResize = event => {
      let w = window.innerWidth;
      let h = window.innerWidth * 9 / 16 * 0.91;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      //console.log('resize camera position',this.camera.position);
      //console.log('resize camera rotation',this.camera.rotation);
      this.renderer.setSize( w, h );
    };
    //this.controls.handleResize()
  }

  attached() {
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
    this.renderer.setSize(w, h);

    this.canvas.appendChild(this.renderer.domElement);


    window.that = this;
    window.that.scene.add(window.that.light);
    window.that.scene.add(window.that.light2);
    window.that.scene.add(window.that.camera);


    this.loadobjects([objects3d.skinskeleton]);
    //,objects3d.lungs,objects3d.arteries,objects3d.veins
    //TODO add other objects
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;
    this.controls = this.declareOrbitControls();

    this.controls.update();

    window.addEventListener( 'resize', this.onWindowResize, false );
    this.animate();
  }

  declareOrbitControls() {
    console.log('orbit controls 8');
    let controls = new OrbitControls( this.camera, this.renderer.domElement );
    controls.target.set( 0, 0, 0 );
    controls.update();
    return controls;
  }

  loadobjects(names) {
    this.index = 0;
    this.names = names;
    this.loadobjects2(names);
  }

  loadobjects2() {
    if (this.index < this.names.length) {
      console.log('loading ', this.names[this.index]);
      let localurl = objects3d.local + this.names[this.index];
      let remoteurl = objects3d.remote + this.names[this.index];
      this.index++;
      this.httpclient.fetch(localurl, {method: 'head'})
        .then(response => {
        //console.log(response)
          if (response.status === 404) this.loadfromurl(remoteurl);
          else this.loadfromurl(localurl);
        })
        .catch(error => {
          this.loadfromurl(remoteurl);
        });
    }
  }

  loadfromurl(myurl) {
    if (!this.loader) this.loader = new GLTFLoader();
    this.loader.load(
      myurl,
      function( gltf ) {
      //gltf.scene.rotation.set(0.5*Math.PI,-0*Math.PI,0.5*Math.PI);
        gltf.scene.rotateZ(0.5 * Math.PI);
        //gltf.scene.position.set(-300,0,-800)
        window.that.scene.add( gltf.scene );
        window.that.progresstxt = '';
        window.that.loadobjects2();
      },
      // called while loading is progressing
      function( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        window.that.progresstxt = ' ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded';
      },
      // called when loading has errors
      function( error ) {
        console.log( 'An error happened', error );
        window.that.progresstxt += 'An error happened ' + error;
      });
  }

  animate() {
    //window.that.scene.rotation.x += 0.01;
    //window.that.scene.rotation.y += 0.01;
    window.requestAnimationFrame( window.that.animate );
    window.that.renderer.render( window.that.scene, window.that.camera );
    //window.that.stats.update()
  }

  switchskin() {
    let skin = this.scene.getObjectByName('Skin', true);
    let apron = this.scene.getObjectByName('Apron', true);
    skin.visible = ! skin.visible;
    apron.visible = ! apron.visible;
    //console.log('switchskin:', skin.visible);
  }

  switchskeleton() {
    let skeleton = this.scene.getObjectByName('Skeleton', true);
    let eyes = this.scene.getObjectByName('Eyes', true);
    skeleton.visible = ! skeleton.visible;
    eyes.visible = ! eyes.visible;
  }

  blink() {
    let eyes = this.scene.getObjectByName('Eyes', true);
    eyes.castShadow = ! eyes.castShadow;
    console.log('eyes', eyes);
  }
}

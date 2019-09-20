# Examples

# WebGL
this example contains demo project utilizing direct webgl api. Further tutorial at https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL

# ThreeJS

This example contains demo project utilizing Three.js library with WEBGL support. The scene5.gltf was downloaded from https://sketchfab.com/3d-models/lymphatic-system-14800d739ecb46678d7584a401b0aa77
The scene cameras and rotation was debuged using https://threejs.org/editor/ and manually set in scene3d.js

# Adding new example

0 to create new example
```
au new
```
1 edit generated webpack.config.js remove slash from baseUrl='/':
```
const baseUrl = ''; // remove slash from baseUrl='/'
```
2 edit aurelia.json and set output to `build` as following
```
    "output": "../../build/examples/my-app"
```
3 edit aurelia_projects/tasks/build.js and add force:true to clearDist:
```javascript
function clearDist() {
  return del([config.output.path],{force:true});
}
```

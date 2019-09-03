import {mat4,vec4} from './gl-matrix';

export class App {
  cubeRotation = 0.0;
  attached(){
    //this.canvas - is referenced from view (html)
    this.gl = this.canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    // If we don't have a GL context, give up now
    if (!this.gl) {
      alert('Unable to initialize WebGL. Your browser or machine may not support it.');
      return;
    }

    // Vertex shader program
    this.vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;

    // Fragment shader program
    this.fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;

    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    this.shaderProgram = this.initShaderProgram(this.gl, this.vsSource, this.fsSource);

    // Collect all the info needed to use the shader program.
    // Look up which attributes our shader program is using
    // for aVertexPosition, aVevrtexColor and also
    // look up uniform locations.
    this.programInfo = {
      program: this.shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(this.shaderProgram, 'aVertexPosition'),
        vertexColor: this.gl.getAttribLocation(this.shaderProgram, 'aVertexColor'),
      },
      uniformLocations: {
        projectionMatrix: this.gl.getUniformLocation(this.shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: this.gl.getUniformLocation(this.shaderProgram, 'uModelViewMatrix'),
      },
    };

    // Here's where we call the routine that builds all the
    // objects we'll be drawing.
    this.buffers = this.initBuffers(this.gl);

    this.then = 0;

    // Draw the scene repeatedly
    console.log("rendering",);
    // set reference this to global variable window.that - so it's known for requestAnimationFrame
    window.that = this;
    window.requestAnimationFrame(this.render);
  }

  render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - window.that.then;
    window.that.then = now;
    window.that.drawScene(window.that.gl, window.that.programInfo, window.that.buffers, deltaTime);
    window.requestAnimationFrame(window.that.render);
  }


//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple three-dimensional cube.
//
  initBuffers(gl) {

    // Create a buffer for the cube's vertex positions.
    this.positionBuffer = gl.createBuffer();

    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    // Now create an array of positions for the cube.
    this.positions = [
      // Front face
      -2.0, -1.0, 1.0,
      -1.2, -1.0, 1.0,
      -1.0, 1.2, 1.0,
      -2.0, 1.0, 1.0,

      // Back face
      -1.0, -1.0, -1.0,
      -1.0, 1.0, -1.0,
      1.0, 1.0, -1.0,
      1.0, -1.0, -1.0,

      // Top face
      -1.0, 1.0, -1.0,
      -1.0, 1.0, 1.0,
      1.0, 1.0, 1.0,
      1.0, 1.0, -1.0,

      // Bottom face
      -1.0, -1.0, -1.0,
      1.0, -1.0, -1.0,
      1.0, -1.0, 1.0,
      -1.0, -1.0, 1.0,

      // Right face
      1.0, -1.0, -1.0,
      1.0, 1.0, -1.0,
      1.0, 1.0, 1.0,
      1.0, -1.0, 1.0,

      // further Left face
      -2.0, -1.0, -1.0,
      -2.0, -1.0, 1.0,
      -2.0, 1.0, 1.0,
      -2.0, 1.0, -1.0,

      // Left face
      -1.3, -1.0, -1.0,
      -1.5, -1.0, 1.0,
      -1.3, 1.0, 1.0,
      -1.5, 1.0, -1.0,

    ];

    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions), gl.STATIC_DRAW);

    // Now set up the colors for the faces. We'll use solid colors
    // for each face.
    this.faceColors = [
      [1.0, 1.0, 1.0, 1.0],    // Front face: white
      [1.0, 0.5, 0.5, 1.0],    // Back face: red
      [0.5, 1.0, 0.5, 1.0],    // Top face: green
      [0.5, 0.5, 1.0, 1.0],    // Bottom face: blue
      [1.0, 1.0, 0.5, 1.0],    // Right face: yellow
      [1.0, 0.5, 1.0, 1.0],    // Left face: purple
      [1.0, 0.5, 0.3, 1.0],    // further Left face: purple
      [1.0, 0.5, 0.3, 1.0],    // further Left face: purple
    ];

    // Convert the array of colors into a table for all the vertices.
    this.colors = [];

    for (let j = 0; j < this.faceColors.length; ++j) {
      let c = this.faceColors[j];

      // Repeat each color four times for the four vertices of the face
      this.colors = this.colors.concat(c, c, c, c);
    }

    this.colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colors), gl.STATIC_DRAW);

    // Build the element array buffer; this specifies the indices
    // into the vertex arrays for each face's vertices.
    this.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    this.indices = [
      0, 1, 2, 0, 2, 3,    // front
      4, 5, 6, 4, 6, 7,    // back
      8, 9, 10, 8, 10, 11,   // top
      12, 13, 14, 12, 14, 15,   // bottom
      16, 17, 18, 16, 18, 19,   // right
      20, 21, 22, 20, 22, 23,   // left
      24, 25, 26, 24, 26, 27,   // left2
    ];

    // Now send the element array to GL
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(this.indices), gl.STATIC_DRAW);

    return {
      position: this.positionBuffer,
      color: this.colorBuffer,
      indices: this.indexBuffer,
    };
  }

//
// Draw the scene.
//
  drawScene(gl, programInfo, buffers, deltaTime) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
      fieldOfView,
      aspect,
      zNear,
      zFar);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    mat4.translate(modelViewMatrix,     // destination matrix
      modelViewMatrix,     // matrix to translate
      [-0.0, 0.0, -6.0]);  // amount to translate
    mat4.rotate(modelViewMatrix,  // destination matrix
      modelViewMatrix,  // matrix to rotate
      this.cubeRotation,     // amount to rotate in radians
      [0, 0, 1]);       // axis to rotate around (Z)
    mat4.rotate(modelViewMatrix,  // destination matrix
      modelViewMatrix,  // matrix to rotate
      this.cubeRotation * .5,// amount to rotate in radians
      [0, 1, 0]);       // axis to rotate around (X)
    mat4.rotate(modelViewMatrix,  // destination matrix
      modelViewMatrix,  // matrix to rotate
      this.cubeRotation* .1,     // amount to rotate in radians
      [1, 0, 0]);       // axis to rotate around (Y)

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute
    {
      const numComponents = 3;
      const type = gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
      gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
    }

    // Tell WebGL how to pull out the colors from the color buffer
    // into the vertexColor attribute.
    {
      const numComponents = 4;
      const type = gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset);
      gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
    }

    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Tell WebGL to use our program when drawing

    gl.useProgram(programInfo.program);

    // Set the shader uniforms

    gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
    gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

    {
      const vertexCount = 42;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }

    // Update the rotation for the next draw

    this.cubeRotation += deltaTime;
  }

//
// Initialize a shader program, so WebGL knows how to draw our data
//
  initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // Create the shader program

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
      return null;
    }

    return shaderProgram;
  }

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
  loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    // Send the source to the shader object

    gl.shaderSource(shader, source);

    // Compile the shader program

    gl.compileShader(shader);

    // See if it compiled successfully

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }



}

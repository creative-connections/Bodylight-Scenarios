# Virtual Patient in 3D

In the following page an web application shows 3D visualisation of human body with animated breathing. 


![virtualpatient](virtualpatient.gif)

You may open this app directly in a browser inside VR/AR device at https://bodylight.physiome.cz/VR/breathing/ (tested in Oculus Quest 2, Vivo, MS Hololens 2)

3D model of human and organs were made from raw data obtained from BodyParts3D database https://lifesciencedb.jp/bp3d/, textures and basic optimization made with Cinema4D software and exported by GLTF exporter. 
Model of Hemodynamics were made with Bodylight.js components https://bodylight.physiome.cz/Bodylight-docs/reference/
3D scene is made with Babylon.js library utilising WebGL API of standard web browser delivering 3D experience in 2D desktop window. It's possible to siwtch to immersive view in VR or AR devices thanks to WebXR API of standard web browser delivering full 3D experience in VR/AR devices (tested in Oculus Quest 2 web browser and MS Hololens 2 MS Edge web browser).

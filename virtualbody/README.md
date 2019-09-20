# Virtual Body - Default Virtual Patient App

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Local cache of GLTF files

GLTF files of 3d models are from externally hosted on public cloud, for testing offline purposes execute the script:

`python cachemodels.py`
 - this will download the model files into `/static/models` directory which is not part of source control. Scened3d object checks whether local files are available, if not then remote files are downloaded.

## Add new 3d model

- upload to public pcloud - 
- add new entry line to src/components/objects3d.json
- add code to load object into src/components/scene3d.js

## Build for test

Run `au build --watch`. build/virtualbody contains the html and js files - these should be aliased from local apache config.

## Build for production

Run `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.

## Integration (e2e) tests

You need the app running for integration test.

First, run `au run` and keep it running.

Then run `au protractor`.


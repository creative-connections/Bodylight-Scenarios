# Bodylight-Scenarios
Scenarios for Bodylight platform based on physiolobrary models

# Installation

To install this component use scripts to create virtual machine https://github.com/creative-connections/Bodylight-VirtualMachine

## Build and deploy

first cache 3d models and build by 
```
cd virtualbody
python cachemodels.py
au build
cd ..
```
Then deploy the build to the gh-pages
```
./publishsite.sh
```


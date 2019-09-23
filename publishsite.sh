#git subtree push --prefix build/virtualbody origin gh-pages
#using https://github.com/X1011/git-directory-deploy
export GIT_DEPLOY_DIR=build/virtualbody
export GIT_DEPLOY_REPO=https://github.com/creative-connections/Bodylight-Scenarios.git
./deploy.sh

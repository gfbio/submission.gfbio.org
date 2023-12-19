#!/usr/bin/env bash
# load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# script
rm -r .envs && cp -r /home/gitlab-runner/.gfbio_envs/ .envs
sed -i "s/VERSION =.*/VERSION ='$(git describe --tags | egrep -o '[0-9]+\.[0-9]+\.[0-9]+')'/g" config/settings/base.py
nvm use 8
cd userinterface && npm i && npm run collect-ci
cd ../
nvm use default
docker-compose -f staging.yml build
./cicd/setLogDriverTag.sh
docker-compose -f staging.yml up -d postgres
docker-compose -f staging.yml run --rm postgres backup
docker-compose -f staging.yml run --rm django python manage.py migrate
docker-compose -f staging.yml down
docker-compose -f staging.yml up -d


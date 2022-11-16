#!/usr/bin/env bash

# load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# script
rm -r .envs && cp -r /home/gitlab-runner/.gfbio_envs/ .envs
docker stack rm "$TEST_NAME" || true
while [[ $(docker ps | grep -c "$TEST_NAME") -gt 0 ]]; do sleep 1; done
nvm use 8
cd userinterface && npm i && npm run collect-ci
cd ../
nvm use default
cp gfbio_submissions/templates/account/webtest_login.html gfbio_submissions/templates/account/login.html
sed -i s/ISSUE_ID/$TEST_NAME/g cicd/production.yml
sed -i "s/VERSION =.*/VERSION ='$(git describe --tags | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+')'/g" config/settings/base.py
sed -i s/DJANGO_ALLOWED_HOSTS=.*/DJANGO_ALLOWED_HOSTS=\.test\.gfbio\.dev/g .envs/.production/.django
sed -i s/HOST_URL_ROOT=.*/HOST_URL_ROOT=https:\/\/$TEST_NAME\.test\.gfbio\.dev/g .envs/.production/.django
sed -i 's/DJANGO_ADMIN_URL=.*\//DJANGO_ADMIN_URL='"$ADMIN_URL"'/g' .envs/.production/.django
sed -i s/EMDATE/$(date +%Y-%m-%d -d "+ 365 days")/g cicd/test_data.json
docker-compose -f cicd/production.yml build
# create docker volume
VOLUME_PATH=/home/gitlab-runner/volumes/gfbio-"$TEST_NAME"
mkdir -p "$VOLUME_PATH"
docker volume create --name gfbio-"$TEST_NAME" --opt type=none --opt device="$VOLUME_PATH" --opt o=bind
# start stack
ADMIN_NICKNAME=${ADMIN_NICKNAME} ADMIN_EMAIL=${ADMIN_EMAIL} ADMIN_PASSWORD=${ADMIN_PASSWORD} docker stack deploy -c cicd/production.yml "$TEST_NAME"


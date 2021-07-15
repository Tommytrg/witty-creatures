#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate 

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'ethcc4.witnet.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:witnet/witty-creatures.git HEAD:gh-pages

cd -
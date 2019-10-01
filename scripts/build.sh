#!/bin/bash

set -e

rm -rf public

yarn lerna run build --concurrency 1

mkdir public
mkdir public/docs

cp -r packages/main/public/. public/.
cp -r packages/docs/public/. public/docs/.

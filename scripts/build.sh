#!/bin/bash

set -e

rm -rf public

yarn lerna run build --concurrency 1

mkdir public
mkdir public/words

cp -r packages/landing/public/. public/.
cp -r packages/words/public/. public/words/.

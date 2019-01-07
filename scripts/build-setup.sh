#!/bin/bash

rm -rf dist
mkdir dist
mkdir dist/theme

cp README.md dist/README.md
cp LICENSE dist/LICENSE
cp src/scss/theme/variables.scss dist/theme/variables.scss

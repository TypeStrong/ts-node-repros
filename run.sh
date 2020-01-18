#!/usr/bin/env bash

apt-get install git
git clone https://github.com/cspotcode/typegoose
cd typegoose
git checkout repro-ts-node-898
yarn
yarn mocha

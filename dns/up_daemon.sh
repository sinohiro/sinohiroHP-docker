#!/bin/sh
pushd $(dirname ${BASH_SOURCE:-$0})
docker-compose up --force-recreate --build -d
popd

#!/bin/sh
pushd $(dirname ${BASH_SOURCE:-$0})
docker-compose down --rmi local
popd

#!/bin/sh

set -eu

SCRIPT_DIR=$(cd $(dirname $0); pwd)

cd ${SCRIPT_DIR}/../

npm run build

cd examples

npm install
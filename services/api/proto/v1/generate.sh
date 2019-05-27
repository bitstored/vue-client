#!/bin/sh
set -ex
mkdir -p ../../../../src/pb/
protoc -I=.  \
 --js_out=import_style=commonjs,binary:./../../../../src/pb/ \
 --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./../../../../src/pb/  user-service.proto

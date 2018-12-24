#! /bin/bash
#git pull origin develop
port=`grep 'server.port' vs-controller/src/main/resources/application.properties |grep -P '[0-9]+' -o`
lsof -i:${port}|grep 'java'|awk '{print $2}'> vs.pid && kill -9 `cat vs.pid`
echo '' > vs.pid
gradle clean
gradle compileJava
cd vs-controller
gradle build
cd ../
nohup gradle vs-controller:bootRun > id-vs.log 2>&1  &
tail -f id-vs.log
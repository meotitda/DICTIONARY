#!/usr/bin/env bash
if [ -z ${1} ]; then
    echo '[Error] Invalid File Name'
    exit 1
fi

Writer=$1
IS_INITIALIZE=$2

DIRECTORY=./Writder.md

if [ ! -e $DIRECTORY && -z IS_INITIALIZE ]; then
    echo '[Initialize]'
    touch $DIRECTORY
fi

if [ ! -e $DIRECTORY && -n IS_INITIALIZE ]; then
    echo "[Error] Can't find file"
     exit 1  
fi


cat $DIRECTORY | while read line; do
  echo $line
done

cat >> ${DIRECTORY} <<- EOM

new one ${Writer}

EOM

echo Create $DIRECTORY

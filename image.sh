#!/usr/bin/env bash

function takePrefix() {
    PREFIX=${FILE:0:1}
    UPPER_PREFIX=`echo $PREFIX | tr '[:lower:]' '[:upper:]'`
    echo $UPPER_PREFIX
}

function takeWithoutPrefix() {
    REMAINDER=${FILE:1}
    LOWER_REMAINDER=`echo $REMAINDER | tr '[:upper:]' '[:lower:]'`
    echo $LOWER_REMAINDER
}


if [ -z ${1} ]; then
    echo '[Error] Invalid File Name'
    exit 1
fi


FILE=$1

PREFIX=$(takePrefix)
REMAINDER=$(takeWithoutPrefix)
TITLE=$PREFIX$REMAINDER

DIRECTORY=./$PREFIX/$TITLE.md

if [ ! -e $DIRECTORY ]; then
    echo "[Error] Doesn't Exist File"
    exit 1  
fi

echo "![제목](../2TAT1C/$TITLE _1.png)" >> $DIRECTORY


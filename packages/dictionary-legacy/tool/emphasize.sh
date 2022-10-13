#!/usr/bin/env bash

ORANGE="<span style='color:#FFCC00; font-weight:bold;'>"
PUPPLE="<span style='color:#A600FF; font-weight:bold;'>"
MINT="<span style='color:#00FFCC; font-weight:bold;'>"
BLUE="<span style='color:#00A6FF; font-weight:bold;'>"

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
COLOR=$2

PREFIX=$(takePrefix)
REMAINDER=$(takeWithoutPrefix)
TITLE=$PREFIX$REMAINDER

DIRECTORY=./$PREFIX/$TITLE.md

if [ ! -e $DIRECTORY ]; then
    echo "[Error] Doesn't Exist File"
    exit 1  
fi

 case $COLOR in

    orange)
            echo "Emphasize ORANGE at $DIRECTORY"
            echo "$ORANGE" >> $DIRECTORY
           ;;
    pupple)
            echo "Emphasize PUPPLE at $DIRECTORY"
            echo "$PUPPLE" >> $DIRECTORY
           ;;

    mint)
            echo "Emphasize MINT at $DIRECTORY"
            echo "$MINT" >> $DIRECTORY
           ;;
    blue)
            echo "Emphasize MINT at $DIRECTORY"
            echo "$BLUE" >> $DIRECTORY
            ;;
    *)
        echo "$ORANGE" >> $DIRECTORY
esac



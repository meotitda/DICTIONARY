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

if [ $1 -z ]; then
    echo '[Error] Invalid File Name'
    exit 1
fi

FILE=$1

PREFIX=$(takePrefix)
REMAINDER=$(takeWithoutPrefix)
TITLE=$PREFIX$REMAINDER

DIRECTORY=./$PREFIX/$TITLE.md

touch $DIRECTORY

cat > ${DIRECTORY} <<- EOM
# ${TITLE}

원형 : 입력

의미  : <span style="color:#FFBF00; font-weight:bold;">강조</span>

발음 : 알리아스

설명
([참고](주소))

## 관련 기술
1. 예시 1

2. 예시 2


EOM

echo Create $DIRECTORY

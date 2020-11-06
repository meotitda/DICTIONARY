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

DIRECTORY=./DIC/$PREFIX/$TITLE.md

if [ -e $DIRECTORY ]; then
    echo '[Error] Already File Name'
    exit 1  
fi

touch $DIRECTORY

cat > ${DIRECTORY} <<- EOM

# ${TITLE}


![Common](../../2TAT1C/Label_Common.png)
![Common](../../2TAT1C/Label_Common.png)
![Common](../../2TAT1C/Label_Common.png)
![Common](../../2TAT1C/Label_Common.png)
![Common](../../2TAT1C/Label_Common.png)

<a href="">#해시</a>

## Content
내용입니다!
<a href=""/>링크는 이렇게 추가합니다.
<img src=""/>이미지는 이렇게 추가합니다.

EOM

echo Create $DIRECTORY

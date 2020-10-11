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

if [ -e $DIRECTORY ]; then
    echo '[Error] Already File Name'
    exit 1  
fi

touch $DIRECTORY

cat > ${DIRECTORY} <<- EOM
<d-title>

# ${TITLE}

</d-title>


<d-label>

<d-inner>

![Common](../2TAT1C/Label_Common.png)

</d-inner>

</d-label>

<d-origin>

원형 : 입력

</d-origin>

<d-mean>

의미  : <span style="color:#FFBF00; font-weight:bold;">강조</span>

</d-mean>

<d-pronunciation>

발음 : 알리아스

</d-pronunciation>

<d-content>

설명
([참고](주소))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. 예시 1

</d-inner>

<d-inner>

2. 예시 2

</d-inner>

</d-relation>

EOM

echo Create $DIRECTORY

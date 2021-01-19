#!/usr/bin/env bash

if [ $# -lt 3 ]; then
    echo "Usage: `basename $0` <user>:<token> <github-api-url> <org/repo>"
    exit
fi

user=$1
base=$2
repo=$3
accept="Accept: application/vnd.github.symmetra-preview+json"

curl -f -u "$user" -H "$accept" $base/repos/$repo/labels

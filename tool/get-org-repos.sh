#!/usr/bin/env bash

if [ $# -lt 3 ]; then
    echo "Usage: `basename $0` <user>:<token> <github-api-url> <org> [type]"
    echo
    echo "  type    Can be one of all, public, private, forks, sources, member. Default: all"
    echo
    echo "To get just the names:"
    echo
    echo "    `basename $0` <user>:<token> <github-api-url> <org> | jq -r .[].name"
    exit
fi

user=$1
base=$2
org=$3
type=${4:-all}

curl -v -s -f -u "$user" "$base/orgs/$org/repos?type=$type&per_page=100"
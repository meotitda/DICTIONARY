#!/usr/bin/env bash

if [ $# -lt 4 ]; then
    echo "Usage: `basename $0` <user>:<token> <github-api-url> <labels.json> <org/repo>"
    exit
fi

user=$1
base=$2
file=$3
repo=$4

accept="Accept: application/vnd.github.symmetra-preview+json"

echo "Uploading labels in ${repo}:"
readarray -t labels < <(jq -c '.[] | {name: .name, description: .description, color: .color}' $file)
for label in "${labels[@]}"; do
    name=$(jq -r '.name' <<< $label)
    
    printf "+ $name"
    # first try to update existing label
    if curl -f -s -X PATCH -u "$user" -H "$accept" -d "$label" $base/repos/$repo/labels/$name > /dev/null; then
        echo " updated."
    else
        # if it failed, then try to create a new label
        curl -f -s -u "$user" -H "$accept" -d "$label" $base/repos/$repo/labels > /dev/null
        echo " CREATED."
    fi
done
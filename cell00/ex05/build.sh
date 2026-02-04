#!/bin/bash

for name in "$@"
do
mkdir "ex$name"
echo "ex$name is created."
done

if [ $# -eq 0 ]; then echo "No argument provided."
fi

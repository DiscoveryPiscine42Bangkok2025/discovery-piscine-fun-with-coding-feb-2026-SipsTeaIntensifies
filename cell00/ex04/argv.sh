#!/bin/bash

if [ -n "$1" ]; then echo "Argument 1: $1"; fi
if [ -n "$2" ]; then echo "Argument 2: $2"; fi
if [ -n "$3" ]; then echo "Argument 3: $3"; fi
if [ $# -eq 0 ]; then echo "No argument provided."; fi

#!/bin/bash
printf "%d files and %d directories detected.\n" $(ls -l | grep ^- | wc -l) $(ls -l | grep ^d | wc -l)

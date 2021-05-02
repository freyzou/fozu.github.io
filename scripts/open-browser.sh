#!/bin/bash
echo "got $# parameters"
FILE="index.html"
if [ "$#" -gt "0" ];then
  if [[ (! -d $1) && (! -f $1) ]]; then
      echo "$1 is not a file or directory"
  else
      FILE=$1
  fi
fi

open $FILE -a Firefox

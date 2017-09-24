#!/bin/bash

export REPLACEMENT=stencil-examples

# replace base-path with root:
# /$REPLACEMENT/ -> /

if ! [ -z "$1" ]; then
  sed -i -e "s/\(src=\"\/$REPLACEMENT\/\)/src=\"\//g" $1
  sed -i -e "s/\(href=\"\/$REPLACEMENT\/\)/href=\"\//g" $1
  sed -i -e "s/\<head\>\<base\ href=\"\/$REPLACEMENT\/\"\/>/\<head\>/g" $1
  sed -i -e "s/navigator\.serviceWorker\.register('\/$REPLACEMENT\/sw\.js')/navigator\.serviceWorker\.register('\/sw\.js')/g" $1
  sed -i -e "s/\/$REPLACEMENT\/build\/app\//\/build\/app\//g" $1
fi
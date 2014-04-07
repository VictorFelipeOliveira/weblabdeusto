#!/bin/bash


USER_ACCOUNT=$USER
VIRTUALENV_NAME=wcloud
VIRTUALENV_ACTIVATE=/home/lrg/Envs/wcloud/bin/activate


export WCLOUD_SETTINGS=/home/weblab/weblab/tools/wcloud/secret_settings.py
export PYTHONPATH=.
export http_proxy=http://proxy-s-priv.deusto.es:3128/
export https_proxy=https://proxy-s-priv.deusto.es:3128/

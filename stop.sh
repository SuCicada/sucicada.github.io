#!/bin/bash

lsof -i:5000 -i:4000 | grep TCP | awk '{print $2}' | xargs kill


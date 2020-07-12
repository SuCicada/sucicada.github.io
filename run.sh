#!/bin/bash
cd /home/peng/APP/sucicada.github.io
nohup hexo server > log.out 2>&1 &
cd /home/peng/APP/sucicada.github.io/hexo-editor-master
nohup npm start > ../log.out 2>&1 &

#!/bin/bash
echo "Inizializzazione progetto"
FILE=log.txt
if [ -f "$FILE" ]; then
    rm log.txt
fi
sh ./reg.sh 
sleep 1
sh ./start.sh
sleep 1
sh ./check.sh 


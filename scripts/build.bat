@echo off

echo "Moving plugin.json to build directory..."
copy plugin.json build\plugin.json
copy logo.png build\logo.png
copy preload.js build\preload.js

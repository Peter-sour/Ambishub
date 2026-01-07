#!/bin/bash

echo "--- 1. Building Frontend React ---"
sudo apt remove ambishub
sudo apt purge ambishub
sudo apt autoremove
cd frontend && npm run build

echo "--- 2. Cleaning & Copying Dist to Desktop ---"
cd ..
rm -rf desktop/dist
cp -r frontend/dist desktop/

echo "--- 3. Building Linux .deb Package ---"
cd desktop
npm run build-linux
npm run make-deb

echo "--- DONE! Cek folder desktop/dist/installers ---"
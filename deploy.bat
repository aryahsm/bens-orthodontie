@echo off
title Publish Ben's Orthodontie Website
color 0B
echo.
echo  ============================================
echo    PUBLISHING BEN'S ORTHODONTIE WEBSITE
echo  ============================================
echo.
cd /d "%~dp0"

echo  [1/3] Saving your photo changes...
git add images _data/photos.json
git commit -m "Update photos via editor" >nul 2>&1

echo  [2/3] Uploading to GitHub...
git push origin main

echo  [3/3] Publishing to live website...
call npx vercel --prod --yes

echo.
echo  ============================================
echo    DONE!  Your site is live at:
echo    https://bens-orthodontie.vercel.app
echo  ============================================
echo.
echo  (Wait about 1 minute, then refresh your site)
echo.
pause

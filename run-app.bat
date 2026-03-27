@echo off
color 0b
echo ==========================================
echo    Starting 404SQUAD React Application...
echo ==========================================
echo.
cd /d "%~dp0app"
npm run dev -- --open
pause

@echo off
echo ==============================================
echo Pushing Portfolio to GitHub (MahekPanara24)
echo ==============================================
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Pushed successfully to https://github.com/MahekPanara24/Portfolio
    echo GitHub Actions will now automatically deploy the site to GitHub Pages!
) else (
    echo.
    echo [NOTICE] If the repository does not exist yet on GitHub:
    echo 1. Open https://github.com/new?name=Portfolio
    echo 2. Click "Create repository" (leave README unchecked)
    echo 3. Run this script again!
)
pause

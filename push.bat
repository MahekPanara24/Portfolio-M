@echo off
echo ==============================================
echo Pushing Portfolio-M to GitHub (KrishJadav30)
echo ==============================================
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Pushed successfully to https://github.com/KrishJadav30/Portfolio-M
    echo GitHub Actions will now automatically deploy the site to GitHub Pages!
    echo Live site URL: https://krishjadav30.github.io/Portfolio-M/
) else (
    echo.
    echo [NOTICE] If the repository does not exist yet on GitHub:
    echo 1. Open https://github.com/new?name=Portfolio-M
    echo 2. Set Public, leave README unchecked, click "Create repository"
    echo 3. Run this script again or run "git push -u origin main"!
)
pause

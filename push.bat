@echo off
echo ==============================================
echo Building and Syncing Portfolio-M for GitHub Pages
echo ==============================================

call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed! Please fix build errors before pushing.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo Syncing built assets and documents to root for GitHub Pages...
xcopy /Y /Q /E "dist\assets\*" "assets\"
copy /Y "dist\Mahek_Panara_Cybersecurity_Resume.pdf" "Mahek_Panara_Cybersecurity_Resume.pdf"
copy /Y "dist\Mahek_Panara_Security_Assessment_Report.pdf" "Mahek_Panara_Security_Assessment_Report.pdf"
copy /Y "dist\.nojekyll" ".nojekyll"
copy /Y "dist\favicon.svg" "favicon.svg"
copy /Y "dist\icons.svg" "icons.svg"
copy /Y "dist\security.txt" "security.txt"

echo.
echo ==============================================
echo Pushing Portfolio-M to GitHub (MahekPanara24)
echo ==============================================
git add .
git diff --cached --quiet
if %ERRORLEVEL% NEQ 0 (
    git commit -m "Deploy: Update site assets, PDF documents and sync build for GitHub Pages"
)
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Pushed successfully to https://github.com/MahekPanara24/Portfolio-M
    echo Live site URL: https://mahekpanara24.github.io/Portfolio-M/
) else (
    echo.
    echo [NOTICE] If the push failed, check your network connection or GitHub credentials.
)
pause

@echo off
setlocal
title WWE Superstars - Bulk PNG to WebP Converter
cd /d "%~dp0"

echo ============================================================
echo        WWE SUPERSTARS - BULK PNG TO WEBP CONVERTER
echo ============================================================
echo.
echo Converts every PNG in a folder and its subfolders to WebP.
echo Original PNG files are KEPT by default.
echo.

where py >nul 2>nul
if %errorlevel%==0 (
    set "PY=py"
) else (
    where python >nul 2>nul
    if %errorlevel%==0 (
        set "PY=python"
    ) else (
        echo Python was not found on this PC.
        echo.
        echo Install Python 3 from https://www.python.org/downloads/
        echo IMPORTANT: tick "Add Python to PATH" during installation.
        echo Then run this file again.
        echo.
        pause
        exit /b 1
    )
)

%PY% -c "import PIL" >nul 2>nul
if not %errorlevel%==0 (
    echo Pillow is required for image conversion.
    echo Installing Pillow now...
    %PY% -m pip install Pillow
    if not %errorlevel%==0 (
        echo.
        echo ERROR: Pillow installation failed.
        pause
        exit /b 1
    )
    echo.
)

set "TARGET="
set /p "TARGET=Paste the folder path containing your PNG files: "
if not defined TARGET (
    echo No folder entered.
    pause
    exit /b 1
)

set "TARGET=%TARGET:"=%"

echo.
set "QUALITY=90"
set /p "QUALITY=WebP quality 1-100 [90]: "
if "%QUALITY%"=="" set "QUALITY=90"

echo.
echo Choose conversion mode:
echo   1. SAFE - create WebP files and KEEP original PNG files
echo   2. REPLACE - create WebP files and DELETE PNG files after success
echo.
set "MODE=1"
set /p "MODE=Enter 1 or 2 [1]: "
if "%MODE%"=="" set "MODE=1"

echo.
echo Starting conversion...
echo.

if "%MODE%"=="2" (
    %PY% "tools\bulk_png_to_webp.py" "%TARGET%" --quality %QUALITY% --delete-png
) else (
    %PY% "tools\bulk_png_to_webp.py" "%TARGET%" --quality %QUALITY%
)

set "RESULT=%errorlevel%"
echo.
if "%RESULT%"=="0" (
    echo Finished successfully.
) else (
    echo Finished with one or more errors. Review the messages above.
)
echo.
pause
exit /b %RESULT%

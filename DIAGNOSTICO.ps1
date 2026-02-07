# SCRIPT DE DIAGNÓSTICO COMPLETO
# Ejecuta esto en tu terminal y comparte el resultado

Write-Host "=== DIAGNÓSTICO DE GIT ===" -ForegroundColor Cyan

Set-Location "c:\xampp\htdocs\Rabal-Grupo-Web"

Write-Host "`n1. ESTADO ACTUAL:" -ForegroundColor Yellow
git status

Write-Host "`n2. REMOTO CONFIGURADO:" -ForegroundColor Yellow
git remote -v

Write-Host "`n3. ÚLTIMOS 5 COMMITS:" -ForegroundColor Yellow
git log --oneline -5

Write-Host "`n4. COMMITS PENDIENTES DE PUSH:" -ForegroundColor Yellow
git log origin/main..HEAD --oneline

Write-Host "`n5. DIFERENCIA CON REMOTO:" -ForegroundColor Yellow
git fetch origin
git status

Write-Host "`n6. INTENTANDO PUSH:" -ForegroundColor Yellow
git push origin main

Write-Host "`n7. RESULTADO:" -ForegroundColor Green
if ($LASTEXITCODE -eq 0) {
    Write-Host "PUSH EXITOSO" -ForegroundColor Green
} else {
    Write-Host "ERROR EN PUSH - Código: $LASTEXITCODE" -ForegroundColor Red
}

Write-Host "`n=== FIN DIAGNÓSTICO ===" -ForegroundColor Cyan

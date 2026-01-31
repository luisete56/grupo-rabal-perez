# Script para hacer push completo a GitHub
# Ejecuta este script desde PowerShell

Write-Host "Desbloqueando repositorio..." -ForegroundColor Yellow
Remove-Item -Force .git\index.lock -ErrorAction SilentlyContinue

Write-Host "Agregando archivos..." -ForegroundColor Yellow
git add server.js COMO-EJECUTAR.md

Write-Host "Haciendo commit..." -ForegroundColor Yellow
git commit -m "feat: Agregar server.js para Hostinger y guía de ejecución"

Write-Host "Haciendo push a GitHub..." -ForegroundColor Green
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Push exitoso!" -ForegroundColor Green
} else {
    Write-Host "`n❌ Error en el push. Verifica tus credenciales de GitHub." -ForegroundColor Red
}

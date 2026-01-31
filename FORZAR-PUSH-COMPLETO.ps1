# Script para FORZAR push de TODOS los archivos
# Ejecuta esto en tu terminal normal

Write-Host "=== FORZANDO PUSH COMPLETO ===" -ForegroundColor Cyan

# Ir al directorio
Set-Location "c:\xampp\htdocs\Rabal-Grupo-Web"

# Eliminar lock si existe
Write-Host "`n1. Eliminando locks..." -ForegroundColor Yellow
Remove-Item -Force .git\index.lock -ErrorAction SilentlyContinue

# Ver estado actual
Write-Host "`n2. Estado actual:" -ForegroundColor Yellow
git status

# Agregar TODOS los archivos (incluso los ignorados temporalmente)
Write-Host "`n3. Agregando TODOS los archivos..." -ForegroundColor Yellow
git add -A
git add -f .

# Ver qué se va a commitear
Write-Host "`n4. Archivos que se van a commitear:" -ForegroundColor Yellow
git status --short

# Commit forzado
Write-Host "`n5. Haciendo commit..." -ForegroundColor Yellow
git commit -m "chore: Forzar push de todos los archivos" --allow-empty

# Push forzado
Write-Host "`n6. Haciendo push a GitHub..." -ForegroundColor Green
git push origin main --force

# Verificar resultado
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ PUSH EXITOSO!" -ForegroundColor Green
    Write-Host "`nVerifica en GitHub: https://github.com/luisete56/grupo-rabal-perez" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ ERROR EN EL PUSH" -ForegroundColor Red
    Write-Host "`nIntenta manualmente:" -ForegroundColor Yellow
    Write-Host "git push origin main" -ForegroundColor White
}

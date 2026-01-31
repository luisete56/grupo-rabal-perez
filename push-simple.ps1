# Script simple para hacer push a GitHub
# Ejecuta esto en tu terminal normal (no desde Cursor)

Write-Host "Haciendo push a GitHub..." -ForegroundColor Cyan

# Cambiar al directorio del proyecto
Set-Location "c:\xampp\htdocs\Rabal-Grupo-Web"

# Verificar estado
Write-Host "`nEstado del repositorio:" -ForegroundColor Yellow
git status --short

# Agregar todos los cambios
Write-Host "`nAgregando cambios..." -ForegroundColor Yellow
git add .

# Hacer commit si hay cambios
$status = git status --porcelain
if ($status) {
    Write-Host "Haciendo commit..." -ForegroundColor Yellow
    git commit -m "Actualización automática"
}

# Push a GitHub
Write-Host "`nHaciendo push a GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n¡Listo! ✅" -ForegroundColor Green

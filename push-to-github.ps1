# Script para hacer push a GitHub deshabilitando el proxy
# Ejecuta este script desde PowerShell en la carpeta del proyecto

Write-Host "Configurando Git para deshabilitar proxy..." -ForegroundColor Yellow

# Deshabilitar variables de entorno de proxy
$env:HTTP_PROXY = ""
$env:HTTPS_PROXY = ""
$env:http_proxy = ""
$env:https_proxy = ""

# Configurar Git para no usar proxy
git config --local http.proxy ""
git config --local https.proxy ""
git config --local http.sslVerify true

Write-Host "Verificando estado del repositorio..." -ForegroundColor Yellow
git status

Write-Host "`nHaciendo push a GitHub..." -ForegroundColor Green
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Push exitoso!" -ForegroundColor Green
} else {
    Write-Host "`n❌ Error en el push. Intenta ejecutar manualmente:" -ForegroundColor Red
    Write-Host "git push origin main" -ForegroundColor Yellow
}

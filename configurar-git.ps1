# Script para configurar Git permanentemente y permitir que Cursor haga push
# Ejecuta este script UNA SOLA VEZ desde PowerShell como Administrador

Write-Host "Configurando Git para deshabilitar proxy permanentemente..." -ForegroundColor Yellow

# Configurar Git para NO usar proxy (a nivel global y local)
git config --global http.proxy ""
git config --global https.proxy ""
git config --local http.proxy ""
git config --local https.proxy ""

# Configurar Git para NO usar proxy específicamente para GitHub
git config --global http.https://github.com.proxy ""
git config --global https.https://github.com.proxy ""

# Configurar para que GitHub no use proxy
git config --global url."https://github.com/".insteadOf git://github.com/

# Verificar configuración
Write-Host "`nConfiguración actual de Git:" -ForegroundColor Green
git config --list | Select-String -Pattern "proxy|github"

Write-Host "`n✅ Git configurado correctamente!" -ForegroundColor Green
Write-Host "Ahora Cursor debería poder hacer push sin problemas." -ForegroundColor Cyan

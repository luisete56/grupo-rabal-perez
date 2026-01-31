# Configuración para que Cursor pueda hacer push a GitHub

## Ejecuta estos comandos UNA SOLA VEZ:

```powershell
# Abre PowerShell como Administrador y ejecuta:

cd c:\xampp\htdocs\Rabal-Grupo-Web

# Deshabilitar proxy en Git (global y local)
git config --global http.proxy ""
git config --global https.proxy ""
git config --local http.proxy ""
git config --local https.proxy ""

# Deshabilitar proxy específicamente para GitHub
git config --global http.https://github.com.proxy ""
git config --global https.https://github.com.proxy ""

# Configurar autenticación con GitHub (opcional, pero recomendado)
# Esto guardará tus credenciales de forma segura
git config --global credential.helper wincred

# Verificar que todo está bien
git config --list | Select-String -Pattern "proxy|github"
```

## O ejecuta el script automático:

```powershell
cd c:\xampp\htdocs\Rabal-Grupo-Web
.\configurar-git.ps1
```

## Después de esto:

Una vez ejecutados estos comandos, Cursor podrá hacer push a GitHub sin problemas.

**Nota:** Si GitHub pide credenciales la primera vez, ingresa:
- Usuario: `luisete56`
- Contraseña: Tu Personal Access Token (no tu contraseña normal)

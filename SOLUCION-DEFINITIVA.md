# Solución Definitiva para Push desde Cursor

## El Problema
Cursor tiene restricciones de permisos que impiden:
- Modificar `.gitconfig` global
- Acceder a credenciales guardadas
- Conexiones de red directas

## Solución: Configurar Remote con Token

**Ejecuta esto UNA SOLA VEZ en tu terminal normal:**

```powershell
cd c:\xampp\htdocs\Rabal-Grupo-Web

# 1. Crear un Personal Access Token en GitHub:
#    - Ve a: https://github.com/settings/tokens
#    - Click "Generate new token (classic)"
#    - Dale permisos: repo (todos)
#    - Copia el token

# 2. Configurar el remote con el token:
git remote set-url origin https://TU_TOKEN@github.com/luisete56/grupo-rabal-perez.git

# O mejor aún, usa tu usuario y token:
git remote set-url origin https://luisete56:TU_TOKEN@github.com/luisete56/grupo-rabal-perez.git
```

**Después de esto, Cursor debería poder hacer push.**

## Alternativa: Usar SSH en lugar de HTTPS

```powershell
# 1. Generar clave SSH (si no tienes):
ssh-keygen -t ed25519 -C "tu-email@example.com"

# 2. Agregar la clave pública a GitHub:
#    - Copia el contenido de: C:\Users\Luigi Rabal Pérez\.ssh\id_ed25519.pub
#    - Ve a: https://github.com/settings/keys
#    - Click "New SSH key" y pega la clave

# 3. Cambiar remote a SSH:
git remote set-url origin git@github.com:luisete56/grupo-rabal-perez.git
```

**SSH suele funcionar mejor desde entornos restringidos como Cursor.**

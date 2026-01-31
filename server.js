/**
 * Entry point para Hostinger
 * Este archivo ejecuta la aplicación compilada en producción
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { createRequire } from 'module';

// Establecer entorno de producción si no está definido
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear require para módulos CommonJS
const require = createRequire(import.meta.url);

// Verificar que el archivo compilado existe
const distPath = join(__dirname, 'dist', 'index.cjs');

if (!existsSync(distPath)) {
  console.error('Error: El archivo compilado no existe. Ejecuta "npm run build" primero.');
  console.error(`Ruta esperada: ${distPath}`);
  process.exit(1);
}

// Importar y ejecutar la aplicación compilada
try {
  require('./dist/index.cjs');
  console.log('✅ Servidor iniciado correctamente');
} catch (error) {
  console.error('❌ Error al iniciar el servidor:', error);
  process.exit(1);
}

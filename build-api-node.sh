#!/bin/bash

# Nombre del zip
ZIP_NAME="api-node.zip"

# Carpeta de salida temporal
TEMP_DIR="dist"

# Limpiar zip anterior y carpeta temporal
rm -f $ZIP_NAME
rm -rf $TEMP_DIR

# Crear carpeta temporal y copiar archivos necesarios
mkdir -p $TEMP_DIR

# Copiar código fuente, excluyendo carpetas innecesarias
rsync -av \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='tests' \
  --exclude='*.log' \
  --exclude='*.zip' \
  --exclude='*.sh' \
  --exclude='README.md' \
  ./ $TEMP_DIR

# Instalar solo dependencias necesarias para producción
cd $TEMP_DIR
npm install --omit=dev

# Crear el archivo ZIP
zip -r ../$ZIP_NAME .

# Volver y limpiar
cd ..
rm -rf $TEMP_DIR

echo "Archivo $ZIP_NAME generado correctamente."

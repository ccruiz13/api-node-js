#!/bin/bash

# Nombre del archivo zip
ZIP_NAME="node-api.zip"

# Limpiar cualquier zip anterior
rm -f $ZIP_NAME

# Verificar que los archivos existen
if [ ! -f "index.js" ] || [ ! -f "package.json" ]; then
  echo "Faltan archivos esenciales (index.js, package.json)."
  exit 1
fi

# Crear el ZIP incluyendo solo los archivos necesarios
zip -r $ZIP_NAME index.js src package.json package-lock.json

echo "Archivo $ZIP_NAME generado correctamente."

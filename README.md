# ENTRYPASS - Gestión de Acceso

Este proyecto es una aplicación de gestión de acceso para barrios privados construida con React, Vite y Tailwind CSS.

## Cómo ejecutar con Docker

Para construir y ejecutar la aplicación en un contenedor Docker, sigue estos pasos:

### 1. Construir la imagen
```bash
docker build -t entrypass-app .
```

### 2. Ejecutar el contenedor
```bash
docker run -d -p 8080:80 entrypass-app
```

La aplicación estará disponible en `http://localhost:8080`.

## Estructura del Proyecto

- `Dockerfile`: Configuración de construcción multi-etapa (Build con Node, Serve con Nginx).
- `nginx.conf`: Configuración de Nginx para manejar el enrutamiento de Single Page Application (SPA).
- `.dockerignore`: Archivos excluidos del contexto de construcción de Docker.
- `src/`: Código fuente de la aplicación React.

## Desarrollo Local

Para ejecutar en modo desarrollo:
```bash
npm install
npm run dev
```

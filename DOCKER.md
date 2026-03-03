# Docker Setup Guide

Este proyecto incluye soporte completo para Docker, permitiendo ejecutar la aplicación en contenedores de forma fácil.

## 📋 Requisitos

- Docker 20.10+
- Docker Compose 1.29+

Descarga desde: https://www.docker.com/products/docker-desktop

## 🚀 Formas de Levantar la Aplicación

### Opción 1: Usando Docker Compose (Recomendado)

#### Desarrollo (con Hot Reload)

```bash
docker-compose up app-dev
```

O usando Make:
```bash
make dev
```

Accede a: **http://localhost:3000**

Los cambios en el código se reflejarán automáticamente en el navegador.

#### Producción

```bash
docker-compose --profile prod up app-prod
```

O usando Make:
```bash
make prod
```

Accede a: **http://localhost:8080**

### Opción 2: Usando el Script Helper

```bash
# Desarrollo
./docker-helper.sh dev

# Producción
./docker-helper.sh prod

# Ver logs
./docker-helper.sh logs

# Abrir shell
./docker-helper.sh shell

# Detener
./docker-helper.sh stop
```

### Opción 3: Usando Make

```bash
# Ver todos los comandos disponibles
make help

# Desarrollo
make dev

# Producción
make prod

# Detener
make stop
```

### Opción 4: Comandos Docker Directos

#### Desarrollo

```bash
# Construir imagen
docker build -t portfolio-dev:latest .

# Ejecutar contenedor
docker run -p 3000:3000 -v $(pwd):/app portfolio-dev:latest
```

#### Producción

```bash
# Construir imagen
docker build -f Dockerfile.prod -t portfolio-prod:latest .

# Ejecutar contenedor
docker run -p 8080:3000 portfolio-prod:latest
```

## 📊 Gestión de Contenedores

### Ver contenedores en ejecución

```bash
docker ps
```

### Ver logs

```bash
# Todos los logs
docker-compose logs

# Logs en tiempo real
docker-compose logs -f

# Logs de un servicio específico
docker-compose logs -f app-dev
```

### Abrir una consola en el contenedor

```bash
docker-compose exec app-dev sh
```

### Detener todos los contenedores

```bash
docker-compose down
```

### Eliminar contenedores e imágenes

```bash
docker-compose down --rmi all
```

## 🔧 Estructura Docker

### Dockerfile (Desarrollo)
- Imagen: Node.js 18 Alpine
- Puerto: 3000
- Características: Hot reload con volúmenes montados

### Dockerfile.prod (Producción)
- Build en dos etapas (builder + production)
- Imagen Base: Node.js 18 Alpine
- Servidor: serve (ligero y optimizado)
- Puerto: 3000 (mapeado a 8080 en docker-compose)
- Tamaño: Optimizado para producción

### docker-compose.yml
- **app-dev**: Servicio de desarrollo con volúmenes y hot reload
- **app-prod**: Servicio de producción (usa profile 'prod')

## 🌐 Acceso a la Aplicación

| Ambiente | URL | Puerto |
|----------|-----|--------|
| Desarrollo (Docker) | http://localhost:3000 | 3000 |
| Producción (Docker) | http://localhost:8080 | 8080 |
| Local (sin Docker) | http://localhost:3000 | 3000 |

## 💡 Tips & Trucos

### Ejecutar búsquedas de error

```bash
docker-compose logs app-dev | grep error
```

### Reconstruir imagen sin caché

```bash
docker-compose build --no-cache app-dev
```

### Ejecutar comando en el contenedor

```bash
docker-compose exec app-dev npm run build
```

### Ver consumo de recursos

```bash
docker stats
```

## 🐛 Solución de Problemas

### Puerto 3000 ya está en uso

Cambia el puerto en `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Nuevo puerto local: 3001
```

### Los cambios no se reflejan en desarrollo

Asegúrate de que los volúmenes estén correctamente configurados:
```bash
docker-compose logs app-dev
```

### Construir imagen falla

Prueba limpiar todo y reconstruir:
```bash
docker-compose down --rmi all
docker-compose build --no-cache app-dev
```

### Permisos denegados en Linux

```bash
sudo docker-compose up app-dev
```

O agrega tu usuario al grupo docker:
```bash
sudo usermod -aG docker $USER
```

## 📚 Documentación

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Node.js Docker Image](https://hub.docker.com/_/node)

## ✨ Optimizaciones Principales

### Desarrollo
✅ Volúmenes montados para hot reload  
✅ Acceso interactivo a la terminal  
✅ Observar cambios en tiempo real  

### Producción  
✅ Build en dos etapas para menor tamaño  
✅ Imagen base lightweight (Alpine)  
✅ Servidor optimizado (serve)  
✅ Sin dependencias de desarrollo  

---

**¡Listo para usar! Elige tu opción preferida y comienza.** 🚀

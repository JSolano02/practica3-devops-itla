# Plantilla DevOps — Electiva 1 (ITLA 2026-C-3)

Aplicación web mínima (lista de tareas) con todo lo necesario para practicar un pipeline **CI/CD** sin cuentas pagas ni Azure:

| Pieza | Archivo | Para qué sirve |
|---|---|---|
| App Node.js/Express | `src/app.js`, `src/server.js` | API de tareas + `/health` y `/metrics` |
| Frontend estático | `public/index.html` | Se publica en GitHub Pages |
| Pruebas automatizadas | `tests/app.test.js` | Jest + Supertest con cobertura |
| Contenedor | `Dockerfile` | Imagen de producción con *healthcheck* |
| Pipeline | `.github/workflows/ci.yml` | Lint → pruebas → build Docker → deploy a Pages |

## Requisitos (gratis)
- Cuenta de **GitHub** (usa un repositorio **público**: GitHub Actions es gratuito).
- **Git** y **Node.js 20+**. Opcional para probar el contenedor en tu PC: **Docker Desktop**.

## Ejecutar en tu computadora
```bash
npm install
npm test          # pruebas + cobertura
npm start         # http://localhost:3000
```
Endpoints: `GET /health`, `GET /metrics`, `GET/POST /api/tareas`, `PATCH /api/tareas/:id`.

Con Docker:
```bash
docker build -t tareas-devops .
docker run -p 3000:3000 tareas-devops
```

## Subirlo a GitHub y activar el pipeline
1. Crea un repositorio **público** vacío en GitHub (sin README).
2. En la carpeta de la plantilla:
   ```bash
   git init
   git add .
   git commit -m "Plantilla inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Abre la pestaña **Actions**: verás el workflow *CI/CD* ejecutándose. Cuando termine, la URL de tu página aparece en el job *Despliegue a GitHub Pages*.

## Práctica 3 — qué debes agregar
- Al menos **2 pruebas nuevas** (por ejemplo: borrar tareas, validar títulos largos).
- Una funcionalidad nueva pequeña con su prueba (ej. `DELETE /api/tareas/:id`).
- Provocar a propósito una prueba fallida, mostrar que el pipeline se pone en **rojo**, corregirla y mostrarlo en **verde**.
- Completar este README con la explicación de cada etapa del pipeline.

## Documentación del pipeline CI/CD — Práctica 3

### Objetivo
Automatizar la validación, las pruebas y el despliegue de una aplicación Node.js/Express mediante GitHub Actions.

### Etapas del pipeline

**1. Activación automática**

El pipeline se ejecuta con cada push o pull request dirigido a la rama main.

**2. Preparación del entorno**

GitHub Actions utiliza Ubuntu, descarga el repositorio y configura Node.js 20.

**3. Instalación de dependencias**

Se ejecuta `npm install` para instalar las librerías necesarias.

**4. Revisión estática**

Se ejecuta `npm run lint`, que comprueba la sintaxis de los archivos JavaScript mediante `node --check`.

**5. Pruebas automatizadas**

Se ejecuta `npm test` utilizando Jest y Supertest. El proyecto cuenta con 8 pruebas automatizadas y genera un informe de cobertura.

**6. Construcción de Docker**

Se construye una imagen Docker para verificar que la aplicación puede empaquetarse correctamente.

**7. Despliegue a GitHub Pages**

Cuando las etapas anteriores son exitosas y el evento es un push a main, se publica el contenido estático de la carpeta public.

### Demostración del funcionamiento

Se realizaron tres ejecuciones para comprobar el pipeline:

- Primera ejecución: pipeline exitoso.
- Segunda ejecución: fallo intencional de una prueba, detectado por GitHub Actions. El despliegue fue omitido.
- Tercera ejecución: prueba corregida y pipeline exitoso nuevamente.

### Resultados finales

- 8 pruebas automatizadas aprobadas.
- 100% de cobertura de líneas.
- 100% de cobertura de funciones.
- 95.65% de cobertura de sentencias.
- 85.71% de cobertura de ramas.
- Despliegue exitoso a GitHub Pages.

### Enlaces

Repositorio:
https://github.com/JSolano02/practica3-devops-itla

Aplicación publicada:
https://jsolano02.github.io/practica3-devops-itla/

Historial del pipeline:
https://github.com/JSolano02/practica3-devops-itla/actions

**Nota:** GitHub Pages aloja el frontend estático; el servidor Express y sus endpoints API se ejecutan localmente.

## Proyecto Final — cómo extenderla
- Persistencia con **SQLite** (o MongoDB) en lugar del arreglo en memoria.
- Publicar la imagen en **GitHub Container Registry** (`ghcr.io`) desde el pipeline.
- Análisis estático real (ESLint) y umbral de cobertura mínima.
- Monitoreo: usar `/metrics` y los logs JSON; definir al menos una **alerta** (ej. errores > 0).
- Documentar: guía de instalación, manual de operaciones y lecciones aprendidas.

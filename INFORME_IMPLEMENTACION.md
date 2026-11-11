
# Informe de Implementación
## Práctica 3: Configuración Básica de Pipeline CI/CD

**Institución:** Instituto Tecnológico de las Américas (ITLA)

**Asignatura:** Electiva 1 - Introducción a DevOps

**Herramientas:** Git, GitHub, GitHub Actions, Node.js, Express, Jest y Docker.

## 1. Introducción

En esta práctica se implementó un pipeline CI/CD utilizando GitHub Actions para automatizar las pruebas, la validación del código y el despliegue de una aplicación web de lista de tareas.

El proyecto utiliza Node.js y Express para el backend, Jest y Supertest para las pruebas automatizadas y GitHub Pages para publicar la interfaz estática.

## 2. Objetivo

Configurar y demostrar el funcionamiento de un pipeline CI/CD capaz de detectar errores en el código y permitir el despliegue únicamente cuando las verificaciones son exitosas.

## 3. Implementación

Se utilizó la plantilla oficial proporcionada por el ITLA.

Se agregó la funcionalidad DELETE /api/tareas/:id para permitir eliminar una tarea existente mediante su identificador.

También se implementaron dos pruebas nuevas:

1. Verificar que una tarea existente se elimina correctamente y devuelve HTTP 204.
2. Verificar que la eliminación de una tarea inexistente devuelve HTTP 404.

Con estas modificaciones, el proyecto cuenta con ocho pruebas automatizadas.

## 4. Configuración del pipeline

El pipeline se encuentra definido en el archivo .github/workflows/ci.yml.

Sus principales etapas son:

1. Descargar el código del repositorio.
2. Configurar Node.js.
3. Instalar las dependencias.
4. Verificar la sintaxis del código.
5. Ejecutar las pruebas automatizadas con Jest.
6. Construir una imagen Docker.
7. Publicar la interfaz estática en GitHub Pages.

El despliegue se ejecuta después de completar correctamente las verificaciones anteriores.

## 5. Resultados de las pruebas

Se obtuvieron los siguientes resultados:

- Pruebas aprobadas: 8 de 8.
- Cobertura de líneas: 100%.
- Cobertura de funciones: 100%.
- Cobertura de sentencias: 95.65%.
- Cobertura de ramas: 85.71%.

## 6. Demostración del pipeline

Se comprobó el funcionamiento del pipeline mediante tres ejecuciones:

**Primera ejecución:**
El pipeline completó correctamente las pruebas y el despliegue, después de habilitar GitHub Pages.

**Segunda ejecución:**
Se modificó intencionalmente una prueba para esperar una respuesta HTTP 200 cuando la aplicación devolvía HTTP 404.

GitHub Actions detectó el fallo. La etapa de pruebas quedó en rojo y se omitió el despliegue.

**Tercera ejecución:**
Se corrigió la prueba y se enviaron los cambios a GitHub.

Las ocho pruebas se ejecutaron correctamente y el despliegue volvió a completarse.

## 7. Seguridad

Se realizó un análisis de dependencias mediante npm audit.

Inicialmente se identificaron seis alertas de severidad baja relacionadas con dependencias de desarrollo.

Posteriormente, la revisión de dependencias de producción mediante npm audit --omit=dev no detectó vulnerabilidades conocidas.

## 8. Resultados y conclusiones

La práctica permitió comprender la importancia de automatizar las verificaciones del software antes de publicarlo.

Se comprobó que GitHub Actions identifica pruebas fallidas y puede impedir que una versión defectuosa continúe hacia el despliegue.

También se logró publicar la interfaz web mediante GitHub Pages.

La versión publicada es estática, mientras que la API desarrollada con Express se ejecuta localmente.

## 9. Enlaces del proyecto

**Repositorio de GitHub:**

https://github.com/JSolano02/practica3-devops-itla

**Aplicación publicada:**

https://jsolano02.github.io/practica3-devops-itla/

**Ejecuciones del pipeline:**

https://github.com/JSolano02/practica3-devops-itla/actions

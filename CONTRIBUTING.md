
# Guía de contribución

## Práctica 3 - DevOps ITLA

Este documento explica cómo contribuir al proyecto de lista de tareas desarrollado con Node.js, Express, Jest y GitHub Actions.

## Requisitos

- Git instalado.
- Node.js versión 20 o superior.
- npm.
- Visual Studio Code.
- Cuenta de GitHub.

## Cómo contribuir

1. Clonar el repositorio.
2. Crear una rama para los cambios.
3. Instalar las dependencias con `npm install`.
4. Implementar las modificaciones necesarias.
5. Ejecutar `npm test` para comprobar las pruebas.
6. Ejecutar `npm run lint` para verificar la sintaxis.
7. Realizar un commit descriptivo.
8. Subir los cambios a GitHub.
9. Crear un Pull Request hacia la rama main.

## Buenas prácticas

- Mantener el código organizado y legible.
- Agregar pruebas para las funcionalidades nuevas.
- No subir la carpeta node_modules.
- No incluir contraseñas ni información confidencial.
- Documentar los cambios importantes.
- Verificar que las pruebas pasen antes de solicitar la integración.

## Integración continua

GitHub Actions ejecuta automáticamente las verificaciones del proyecto cuando se realiza un push o se abre un Pull Request hacia main.

Si una prueba falla, el pipeline registra el error y evita el despliegue.

## Repositorio

https://github.com/JSolano02/practica3-devops-itla

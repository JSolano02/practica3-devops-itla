const request = require('supertest');
const { createApp } = require('../src/app');

describe('API de tareas', () => {
  let app;
  beforeEach(() => { app = createApp(); });

  test('GET /health responde ok', async () => {
    const r = await request(app).get('/health');
    expect(r.status).toBe(200);
    expect(r.body.estado).toBe('ok');
  });

  test('POST /api/tareas crea una tarea', async () => {
    const r = await request(app).post('/api/tareas').send({ titulo: 'Configurar pipeline' });
    expect(r.status).toBe(201);
    expect(r.body).toMatchObject({ id: 1, titulo: 'Configurar pipeline', completada: false });
  });

  test('POST /api/tareas sin título devuelve 400', async () => {
    const r = await request(app).post('/api/tareas').send({});
    expect(r.status).toBe(400);
  });

  test('PATCH /api/tareas/:id alterna completada', async () => {
    await request(app).post('/api/tareas').send({ titulo: 'Escribir pruebas' });
    const r = await request(app).patch('/api/tareas/1');
    expect(r.body.completada).toBe(true);
  });

  test('PATCH de una tarea inexistente devuelve 404', async () => {
    const r = await request(app).patch('/api/tareas/99');
    expect(r.status).toBe(404);
  });

  test('GET /metrics cuenta solicitudes y tareas', async () => {
    await request(app).post('/api/tareas').send({ titulo: 'Medir' });
    const r = await request(app).get('/metrics');
    expect(r.body.tareas).toBe(1);
    expect(r.body.solicitudes).toBeGreaterThanOrEqual(2);
  });
  test('DELETE /api/tareas/:id elimina una tarea', async () => {
    // Crear una tarea
    await request(app)
      .post('/api/tareas')
      .send({ titulo: 'Tarea para eliminar' });

    // Eliminar la tarea
    const r = await request(app)
      .delete('/api/tareas/1');

    // Verificar respuesta correcta
    expect(r.status).toBe(204);

    // Comprobar que la lista está vacía
    const lista = await request(app)
      .get('/api/tareas');

    expect(lista.body).toHaveLength(0);
  });

  test('DELETE /api/tareas/:id devuelve 404 si no existe', async () => {
    // Intentar eliminar una tarea inexistente
    const r = await request(app)
      .delete('/api/tareas/99999');

    // Verificar el código de error
    expect(r.status).toBe(404);

    // Verificar el mensaje de error
    expect(r.body.error).toBe('Tarea no encontrada');
  });

});

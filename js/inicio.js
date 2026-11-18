/* =========================================================
   PÁGINA: INICIO — conteo animado de cada categoría
   ========================================================= */
function contar(id, total) {
  const el = document.getElementById(id);
  const duracion = 900;
  const inicio = performance.now();

  function paso(ahora) {
    const avance = Math.min((ahora - inicio) / duracion, 1);
    const suave = 1 - Math.pow(1 - avance, 3);          // desacelera al final
    el.textContent = Math.round(total * suave);
    if (avance < 1) requestAnimationFrame(paso);
  }
  el.textContent = "0";
  requestAnimationFrame(paso);
}

contar("totalActivos",     activos.length);
contar("totalMateriales",  materiales.length);
contar("totalConsumibles", consumibles.length);

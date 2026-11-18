/* =========================================================
   FUNCIONES COMUNES A TODAS LAS PÁGINAS
   ========================================================= */

const FOTO_PENDIENTE = "img/sin-foto.svg";

/* ---------- Menú desplegable en celular ---------- */
(function () {
  const btn  = document.getElementById("btnMenu");
  const menu = document.getElementById("menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      menu.classList.remove("abierto");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();



/* ---------- Utilidades ---------- */
function normalizar(texto) {
  return String(texto).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/* Color de la insignia según el estado */
function claseEstado(estado) {
  const e = normalizar(estado);
  if (e.includes("obsoleto"))                                   return "estado-obsoleto";
  if (e.includes("deteriorado") || e.includes("sin existencia")) return "estado-malo";
  if (e.includes("reparacion")  || e.includes("sin asignar"))    return "estado-regular";
  return "estado-bueno";   // Operativo - Bueno, Asignado - Bueno, Asignado
}

/* =========================================================
   LISTA 
   ========================================================= */
function iniciarLista(datos, campos) {
  const cuerpo   = document.getElementById("lista");
  const buscador = document.getElementById("buscador");
  const modal    = document.getElementById("modal");
  const foto     = document.getElementById("tarjetaFoto");
  const ficha    = document.getElementById("tarjetaFicha");
  let ultimoFoco = null;

  /* Si la foto no existe, muestra «Foto pendiente» */
  foto.addEventListener("error", () => {
    if (!foto.src.endsWith(FOTO_PENDIENTE)) foto.src = FOTO_PENDIENTE;
  });

  function pintar(filtro = "") {
    const f = normalizar(filtro);
    const lista = datos
      .map((d, indice) => ({ ...d, indice }))
      .filter(d => normalizar(d.detalle + " " + (d.codigo || "")).includes(f));

    cuerpo.innerHTML = lista.length
      ? lista.map((d, i) => `
        <div class="fila item" style="--i:${i}">
          <span class="item-nombre">${d.detalle}</span>
          <button class="btn" data-indice="${d.indice}">Ver detalle <span class="flecha">›</span></button>
        </div>`).join("")
      : `<p class="sin-resultados">No se encontraron resultados.</p>`;
  }

  /* Valor que se muestra en cada campo de la tarjeta */
  function valor(campo, d) {
    const v = d[campo];
    if (campo === "estado") {
      return `<span class="insignia ${claseEstado(v)}">${v}</span>`;
    }
    if (campo === "asignado" && !v) {
      return `<span class="sin-dato">Sin asignar</span>`;
    }
    return (v === undefined || v === "") ? `<span class="sin-dato">—</span>` : v;
  }

  function abrir(indice) {
    const d = datos[indice];
    if (!d) return;
    foto.src = d.foto || FOTO_PENDIENTE;
    foto.alt = "Foto de " + d.detalle;
    document.getElementById("tarjetaNombre").textContent = d.detalle;
        ficha.innerHTML = campos.filter(([campo]) => campo !== "detalle").map(([campo, texto]) =>
      `<dt>${texto}:</dt><dd>${valor(campo, d)}</dd>`
    ).join("");

    ultimoFoco = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("tarjetaCerrar").focus();
  }

  function cerrar() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  }

  cuerpo.addEventListener("click", e => {
    const btn = e.target.closest("[data-indice]");
    if (btn) abrir(Number(btn.dataset.indice));
  });
  document.getElementById("tarjetaCerrar").addEventListener("click", cerrar);
  modal.addEventListener("click", e => { if (e.target === modal) cerrar(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) cerrar(); });
  buscador.addEventListener("input", e => pintar(e.target.value));

  pintar();
}

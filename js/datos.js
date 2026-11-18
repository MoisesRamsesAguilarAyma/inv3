

const asociacion = {
  nombre: "CÁMARA DEPARTAMENTAL DEL LIBRO DE LA PAZ",
  gestion: "2026"
};

const camposActivos = [
  
  ["codigo",         "Código"],
  ["categoria",      "Categoría"],
  ["ubicacion",      "Ubicación"],
  ["estado",         "Estado"],
  ["marca",          "Marca"],
  ["serie",          "# de Serie"],
  ["color",          "Color"],
  ["asignado",       "Asignado a"],
  ["partes",         "Partes"],
  ["ancho",          "Ancho (cm)"],
  ["altura",         "Altura (cm)"],
  ["profundidad",    "Profundidad (cm)"],
  ["codigoAnterior", "Código anterior"],
  ["observaciones",  "Observaciones"]
];

const camposMateriales = [
  
  ["codigo",        "Código"],
  ["estado",        "Estado"],
  ["ubicacion",     "Ubicación"],
  ["ubicacion1",    "Ubicación 1"],
  ["asignado",      "Asignado a"],
  ["color",         "Color"],
  ["observaciones", "Observaciones"]
];

const camposSuministros = camposMateriales;   // mismo orden que Materiales

/* =========================================================

/* ---------- ACTIVOS FIJOS ---------- */
const activos = [
  {
  detalle: "BANCA DE METAL - MADERA",
  codigo: "FER-ME-GAR-0015",
  categoria: "MUEBLES",
  ubicacion: "GARAJE",
  estado: "BUENO",
  marca: "NO TIENE",
  serie: "NO CORRESPONDE",
  color: "CAFÉ CON NEGRO",
  asignado: "Moises",
  partes: 1,
  ancho: 120,
  altura: 45,
  profundidad: 50,
  codigoAnterior: "NUEVO",
  observaciones: "2 ASIENTO DE MADERA, CUERPO DE METAL",
  foto: "img/activos/1.jpg"
},
{
  detalle: "SILLA PLASTICA APILABLE MODELO ESTERILLA",
  codigo: "FER-ME-GAR-0016",
  categoria: "MUEBLES",
  ubicacion: "PISO 1",
  estado: "USADO",
  marca: "COLPLAST",
  serie: "NO CORRESPONDE",
  color: "MARRÓN",
  asignado: "Moises",
  partes: 1,
  ancho: 39,
  altura: 87,
  profundidad: 39,
  codigoAnterior: "INV-225",
  observaciones: "1 USADO Y SUCIO",
  foto: "img/activos/2.jpg"
},
{
  detalle: "SILLA DE METAL PLEGABLE CON ASIENTO Y RESPALDO ACOLCHADO",
  codigo: "CDLLP-ME-GAR-0017",
  categoria: "MUEBLES",
  ubicacion: "GARAJE",
  estado: "USADO",
  marca: "NO TIENE",
  serie: "NO CORRESPONDE",
  color: "PLOMO CON NEGRO",
  asignado: "Moises",
  partes: 1,
  ancho: 38,
  altura: 77,
  profundidad: 38,
  codigoAnterior: "ME-REV-015",
  observaciones: "1 DESGASTADO POR USO CONSTANTE",
  foto: "img/activos/3.jpg"
},
{
  detalle: "SILLA PLASTICA CON BRAZO DECORADA",
  codigo: "FER-ME-GAR-0018",
  categoria: "MUEBLES",
  ubicacion: "PISO 1",
  estado: "USADO",
  marca: "NO TIENE",
  serie: "NO CORRESPONDE",
  color: "GUINDO",
  asignado: "Moises",
  partes: 1,
  ancho: 54,
  altura: 78,
  profundidad: 54,
  codigoAnterior: "ME-REV-123",
  observaciones: "SUCIOS Y SIN GOMITAS EN LAS PATAS",
  foto: "img/activos/4.jpg"
},
{
  detalle: "SILLA DE PLASTICO PARA NIÑOS",
  codigo: "FER-ME-GAR-0019",
  categoria: "MUEBLES",
  ubicacion: "PISO 1",
  estado: "USADO",
  marca: "NO TIENE",
  serie: "NO CORRESPONDE",
  color: "VARIOS",
  asignado: "Moises",
  partes: 1,
  ancho: 40,
  altura: 53,
  profundidad: 40,
  codigoAnterior: "INV-001",
  observaciones: "1 USADO Y SUCIO",
  foto: "img/activos/5.jpg"
}
];

/* ---------- MATERIALES DE TRABAJO ---------- */
const materiales = [
{
  detalle: "Cables HDMI",
  codigo: "CDLLP-MAT-0100",
  estado: "Usado",
  ubicacion: "Librería",
  ubicacion1: "INV-194",
  asignado: "Moises",
  color: "Negro",
  observaciones: "1 - Punta roja, mide 5M",
  foto: "img/materiales/6.jpg"
},
{
  detalle: "Franelas",
  codigo: "CDLLP-MAT-0101",
  estado: "Usado",
  ubicacion: "Librería",
  ubicacion1: "INV-194",
  asignado: "Moises",
  color: "Variado",
  observaciones: "1 - 2 franelas por caja",
  foto: "img/materiales/7.jpg"
},
{
  detalle: "Guantes",
  codigo: "CDLLP-MAT-0102",
  estado: "Usado",
  ubicacion: "Librería",
  ubicacion1: "INV-194",
  asignado: "Moises",
  color: "Amarillo",
  observaciones: "6 - talla M",
  foto: "img/materiales/8.jpg"
},
{
  detalle: "Tijera",
  codigo: "CDLLP-MAT-0103",
  estado: "Usado",
  ubicacion: "Librería",
  ubicacion1: "INV-194",
  asignado: "Moises",
  color: "Negro",
  observaciones: "1 - Caja de herramientas",
  foto: "img/materiales/9.jpg"
}
];

/* ---------- SUMINISTROS DE OFICINA (página consumibles.html) ---------- */
const consumibles = [
{
  detalle: "Boligrafo",
  codigo: "CDLLP-CON-0100",
  estado: "Usado",
  ubicacion: "Librería",
  ubicacion1: "INV-194",
  asignado: "Moises",
  color: "Azul",
  observaciones: "1 - ubicadas en Cajas de trabajo",
  foto: "img/consumibles/10.jpg"
},
{
  detalle: "Scoch",
  codigo: "FER-CON-0101",
  estado: "Usado",
  ubicacion: "Librería",
  ubicacion1: "INV-194",
  asignado: "Moises",
  color: "Transparente",
  observaciones: "1 - ubicadas en Cajas de trabajo",
  foto: "img/consumibles/11.jpg"
},
{
  detalle: "ESPONJA",
  codigo: "FER-CON-0102",
  estado: "USADO",
  ubicacion: "LIBRERÍA",
  ubicacion1: "CAJA 1",
  asignado: "Moises",
  color: "AMARILLO",
  observaciones: "USADO PARA LAVAR VASOS EN FERIA",
  foto: "img/consumibles/12.jpg"
}
];

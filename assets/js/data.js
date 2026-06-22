/*
 * Datos del sitio Vero Ruiz Peluquería.
 * Fuente: data/servicios.json (espejo en JS para poder abrir el sitio
 * localmente con doble clic sin problemas de CORS al hacer fetch).
 * Si actualizás precios, editá ESTE archivo (es el que consume la web).
 */
const SITE = {
  // --- Configuración general (cambiar el WhatsApp acá en un solo lugar) ---
  config: {
    // WhatsApp vigente según AgendaPro. Formato internacional sin signos.
    whatsapp: "5493515128972",
    whatsappDisplay: "+54 9 351 512-8972",
    telefonoFijo: "0351-488-7296",
    mensajeWhatsApp:
      "Hola Vero Ruiz Peluquería! Quería reservar un turno. Mi nombre es ",
  },

  contacto: {
    direccion: "Av. Colón 1455, Planta Baja, Barrio Alberdi",
    ciudad: "Córdoba Capital, Argentina",
    lat: -31.4079111,
    lng: -64.2029462,
    horario: "Martes a sábado · 10:00 a 20:00 hs",
    horarioCorto: "Mar a Sáb · 10–20 hs · Lun y Dom cerrado",
    instagram: "https://www.instagram.com/veroruizpeluqueria/",
    facebook:
      "https://www.facebook.com/p/Vero-Ruiz-Peluqueria-100089834622952",
    tiktok: "https://www.tiktok.com/@veroruizpeluqueria",
    rating: "4.6",
    reseñas: "23",
  },

  equipo: [
    { nombre: "Vero Ruiz", rol: "Estilista principal · Dueña" },
    { nombre: "Dani Cristin", rol: "Estilista" },
    { nombre: "Analía Campal", rol: "Estilista" },
    { nombre: "Carina Bustos", rol: "Estilista" },
    { nombre: "Jorgelin", rol: "Estilista" },
    { nombre: "Emi Acosta", rol: "Estilista" },
  ],

  testimonios: [
    {
      autor: "Lorena",
      texto:
        "Muy conforme!! Unas genias las chicas. Desde la atención hasta el servicio.",
    },
    {
      autor: "Mariana",
      texto:
        "Excelente servicio y muy cálida atención y asesoramiento. Altamente recomendable.",
    },
    {
      autor: "Sandra",
      texto:
        "Fue una gran experiencia. Tuve el placer de conocer a Vero y a todo su equipo, unos genios. Recomendadísimo.",
    },
    { autor: "Daniela", texto: "Excelente atención y resultados." },
  ],

  // Especialidades (reemplazan la lista de precios). Sin precios: se consulta por WhatsApp.
  especialidades: [
    {
      titulo: "Color & Colorimetría",
      desc:
        "Salón certificado L'Oréal Professionnel. Diagnóstico personalizado y color iNOA sin amoníaco para un resultado a tu medida.",
      img: "assets/img/esp-color.jpg",
      alt: "Preparación de color con productos L'Oréal Professionnel",
    },
    {
      titulo: "Balayage & iluminaciones",
      desc:
        "Técnicas de iluminación natural que aportan luz, dimensión y movimiento, cuidando siempre la fibra capilar.",
      img: "assets/img/esp-balayage.jpg",
      alt: "Balayage tono miel",
    },
    {
      titulo: "Mechas & reflejos",
      desc:
        "Mechas con gorro o bandas, babylights y reflejos para realzar tu color con un acabado prolijo y luminoso.",
      img: "assets/img/esp-mechas.jpg",
      alt: "Mechas y reflejos con brillo",
    },
    {
      titulo: "Extensiones",
      desc:
        "Extensiones de cabello con anillas o keratina, en distintos largos y tonos, con colocación y service incluidos.",
      img: "assets/img/esp-extensiones.jpg",
      alt: "Extensiones de cabello en el salón",
    },
    {
      titulo: "Tratamientos & nutrición",
      desc:
        "Rituales nutritivos L'Oréal y Framesi: hidratación, reestructuración y protección del color para un cabello sano.",
      img: "assets/img/esp-tratamientos.jpg",
      alt: "Cabello nutrido con brillo",
    },
    {
      titulo: "Cortes & peinados",
      desc:
        "Cortes a medida, brushing, ondas y peinados para eventos. Te asesoramos según tu estilo y tu tipo de cabello.",
      img: "assets/img/esp-cortes.jpg",
      alt: "Peinado de evento",
    },
  ],

  // Categorías destacadas en la home (resumen visual)
  destacados: [
    {
      titulo: "Color & Colorimetría",
      desc:
        "Salón certificado L'Oréal Professionnel. Color iNOA sin amoníaco, matización, mechas y corrección de color.",
      icon: "color",
    },
    {
      titulo: "Cortes & Peinados",
      desc:
        "Cortes a medida, lavado y modelado, brushing, ondas y peinados para eventos.",
      icon: "scissors",
    },
    {
      titulo: "Tratamientos & Rituales",
      desc:
        "Rituales nutritivos L'Oréal y Framesi, alisados, ondulación, extensiones y estética facial.",
      icon: "leaf",
    },
  ],

  moneda: "ARS",
  fuentePrecios:
    "Precios de referencia (AgendaPro) — confirmar vigencia antes de publicar.",

  categorias: [
    {
      nombre: "Cortes",
      servicios: [
        { nombre: "Corte + Lavado + Modelado (con Vero Ruiz)", precio: 45000 },
        { nombre: "Corte + Lavado + Modelado (Staff)", precio: 40000 },
        { nombre: "Corte Niña (hasta 12 años)", precio: 35000 },
        { nombre: "Corte Masculino o Niño", precio: 20000 },
        { nombre: "Corte de flequillo", precio: 15000 },
        { nombre: "Lavado", precio: 10000 },
        { nombre: "Secado", precio: 10000 },
      ],
    },
    {
      nombre: "Color & Tratamientos",
      servicios: [
        { nombre: "Color completo", precio: 90000 },
        { nombre: "Color de mantenimiento + Nutrición Premium", precio: 90000 },
        { nombre: "Color de mantenimiento / Matización", precio: 60000 },
        { nombre: "Rituales L'Oréal", precio: 60000 },
        { nombre: "Aplicación de color", precio: 35000 },
        { nombre: "Corrección de color", precio: null },
      ],
    },
    {
      nombre: "Decoloración Global",
      servicios: [
        { nombre: "Frontal (solo arriba)", precio: 70000 },
        { nombre: "Mediano", precio: 150000 },
        { nombre: "Largo", precio: 180000 },
      ],
    },
    {
      nombre: "Mechas (con gorro)",
      servicios: [
        { nombre: "Corto", precio: 70000 },
        { nombre: "Mediano", precio: 110000 },
        { nombre: "Largo", precio: 140000 },
      ],
    },
    {
      nombre: "Mechas (con bandas)",
      servicios: [
        { nombre: "Corto", precio: 85000 },
        { nombre: "Mediano", precio: 130000 },
        { nombre: "Largo", precio: 170000 },
      ],
    },
    {
      nombre: "Brushing / Planchita / Ondas",
      servicios: [
        { nombre: "Cabello corto (al mentón)", precio: 25000 },
        { nombre: "Cabello mediano (al hombro)", precio: 35000 },
        { nombre: "Cabello largo (abajo del hombro)", precio: 30000 },
      ],
    },
    {
      nombre: "Ondulación",
      servicios: [
        { nombre: "Corto", precio: 60000 },
        { nombre: "Mediano", precio: 80000 },
        { nombre: "Largo", precio: 120000 },
      ],
    },
    {
      nombre: "Termoactivos",
      servicios: [
        { nombre: "Corto", precio: 70000 },
        { nombre: "Mediano", precio: 90000 },
        { nombre: "Largo", precio: 110000 },
      ],
    },
    {
      nombre: "Rituales nutritivos",
      servicios: [
        { nombre: "Productos L'Oréal o Framesi", precio: 60000 },
        {
          nombre: "Reestructuración, hidratación y protección de color",
          precio: 60000,
        },
      ],
    },
    {
      nombre: "Extensiones (por mechón)",
      servicios: [
        { nombre: "Castañas / Amarronadas (30–55 cm)", precio: 4500, desde: true },
        { nombre: "Rubias (30–55 cm)", precio: 5000, desde: true },
        { nombre: "Service de extensiones con anillas", precio: 1800 },
      ],
    },
    {
      nombre: "Estética & Maquillaje",
      servicios: [
        { nombre: "Maquillaje y peinado", precio: 160000 },
        { nombre: "Maquillaje", precio: 100000 },
        { nombre: "Depilación de rostro con cera", precio: 25000 },
        { nombre: "Perfilado de cejas", precio: 15000 },
      ],
    },
    {
      nombre: "Combos & Promos",
      servicios: [
        { nombre: "Corte + Color + Ritual nutritivo", precio: 120000 },
        { nombre: "Promo color + nutrición", precio: 90000 },
        { nombre: "Promo alisado + refuerzo nutritivo", precio: 90000 },
        { nombre: "Promo corte + nutrición", precio: 65000 },
      ],
    },
  ],
};

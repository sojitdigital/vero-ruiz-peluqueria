# Brief de desarrollo — Vero Ruiz Peluquería

Objetivo: construir un sitio web de muestra (mismo enfoque que con SHARP Peluquería) para mostrárselo a Vero Ruiz Peluquería y ofrecerles adquirirlo o personalizarlo y adquirirlo.

Instagram analizado: https://www.instagram.com/veroruizpeluqueria/ (bloqueado para scraping directo, datos obtenidos por búsqueda web y directorios públicos).

## 1. Datos del negocio

- **Nombre:** Vero Ruiz Peluquería (también figura como "Vero Ruiz Estilista" en directorios de L'Oréal)
- **Rubro:** Peluquería + centro de estética y depilación
- **Trayectoria:** Más de 25 años de experiencia
- **Certificación:** Salón certificado L'Oréal Professionnel (especialistas en colorimetría, color iNOA sin amoníaco)
- **Dirección:** Av. Colón 1455, Planta Baja, Barrio Alberdi, Córdoba Capital, Argentina
- **Coordenadas aprox.:** -31.4079111, -64.2029462
- **Teléfono fijo:** 0351-488-7296
- **WhatsApp (Agendapro):** +54 9 351 512-8972
- **WhatsApp (otra fuente, a confirmar cuál es el vigente):** +54 9 351 615-3081
- **Horario:** Martes a sábado de 10:00 a 20:00 hs. Lunes y domingo cerrado.
- **Rating:** 4.6/5 en AgendaPro (23 reseñas)

## 2. Redes y presencia digital actual

- **Instagram:** @veroruizpeluqueria — aprox. 22 mil seguidores, 1.452 publicaciones, sigue a 431 cuentas
- **Facebook:** facebook.com/p/Vero-Ruiz-Peluqueria-100089834622952
- **TikTok:** @veroruizpeluqueria
- **Reservas actuales:** usan el marketplace AgendaPro (agendapro.com/site/ar/veroruizpeluqueria/455260) — **no tienen sitio web propio**, solo perfiles en redes y directorios de terceros (AgendaPro, L'Oréal, Empresas de Córdoba, Locale.Online, etc.)

Esto confirma el mismo gancho que usamos con SHARP: tienen buena presencia en redes pero ningún sitio propio.

## 3. Equipo

- Vero Ruiz (estilista principal / dueña)
- Dani Cristin
- Analia Campal
- Carina Bustos
- Jorgelin
- Emi Acosta

## 4. Servicios y precios (ARS — tomado de AgendaPro, confirmar vigencia antes de publicar)

Ver detalle estructurado en `data/servicios.json`.

**Resumen por categoría:**

**Cortes**
- Corte de flequillo — $15.000
- Corte + Lavado + Modelado (con Vero Ruiz) — $45.000
- Corte + Lavado + Modelado (Staff) — $40.000
- Corte masculino o niño — $20.000
- Corte niña (hasta 12 años) — $35.000

**Color y tratamientos**
- Aplicación de color — $35.000
- Color completo — $90.000
- Color de mantenimiento / matización — $60.000
- Color de mantenimiento + nutrición premium — $90.000
- Rituales L'Oréal — $60.000

**Decoloración global**
- Frontal — $70.000 · Mediano — $150.000 · Largo — $180.000

**Brushing / planchita / ondas**
- Corto — $25.000 · Mediano — $35.000 · Largo — $30.000

**Ondulación**
- Corto — $60.000 · Mediano — $80.000 · Largo — $120.000

**Mechas (con gorro o con bandas)**
- Desde $70.000 hasta $170.000 según largo y técnica

**Extensiones**
- Castañas/amarronadas y rubias, por tramo de largo (30 a 55 cm) — entre $4.500 y $8.000 por mechón/tramo

**Otros**
- Perfilado de cejas — $15.000
- Depilación de rostro con cera — $25.000
- Maquillaje — $100.000 · Maquillaje + peinado — $160.000
- Combos/promos: corte + nutrición, color + nutrición, alisado + refuerzo, etc.

## 5. Testimonios reales (para usar como reseñas en el sitio)

- Lorena: "Muy conforme!! Unas genias las chicas. Desde la atención hasta el servicio."
- Mariana: "Excelente servicio y muy cálida atención y asesoramiento. Altamente recomendable."
- Sandra: "Fue una gran experiencia... tuve el placer de conocer a Vero y a todo su equipo, unos genios. Recomendadísimo."
- Daniela: "Excelente atención y resultados."

## 6. Referencia de diseño

Usar como base estructural el sitio ya entregado a SHARP Peluquería: https://sharp-peluqueria.vercel.app/ (Inicio, Servicios, Galería, Nosotros, Contacto, Reservar turno vía WhatsApp).

Para Vero Ruiz, adaptar:
- Paleta y tono de marca propios (no copiar el de SHARP)
- Mensaje central: trayectoria (+25 años), certificación L'Oréal Professionnel, colorimetría experta, equipo de varias estilistas
- Mostrar rating 4.6 y testimonios reales arriba

## 7. Estructura de páginas sugerida

1. **Inicio** — hero con propuesta de valor (colorimetría experta, +25 años, certificación L'Oréal), CTA reservar por WhatsApp
2. **Servicios** — por categoría (cortes, color, tratamientos, mechas, extensiones, otros) con precios destacados
3. **Equipo / Nosotros** — presentación de Vero Ruiz y el staff
4. **Galería** — fotos de trabajos (pendiente: no se pudo extraer del Instagram por bloqueo de scraping; usar placeholders o pedir fotos directamente al negocio/cliente)
5. **Contacto** — dirección (Av. Colón 1455), mapa, horarios, botón WhatsApp
6. **Reservar turno** — formulario simple o redirección directa a WhatsApp

## 8. Pendientes / a confirmar antes de avanzar

- Confirmar cuál de los dos números de WhatsApp está vigente
- Conseguir fotos reales (Instagram no se pudo scrapear por JS; lo ideal es pedirle al negocio acceso a sus fotos, o tomar capturas manuales del perfil) — ver `assets/README.md`
- Confirmar precios actuales antes de publicarlos (los de AgendaPro pueden cambiar)

## 9. Objetivo comercial

Mismo enfoque que con SHARP: se construye el sitio de muestra sin costo, se les muestra el resultado por WhatsApp/redes, y se ofrece transferírselo (con o sin ajustes) si quieren adquirirlo.

---

### Fuentes consultadas
- [Vero Ruiz Peluqueria - Agendapro](https://agendapro.com/site/ar/veroruizpeluqueria/455260)
- [Vero Ruiz Estilista - L'Oréal Professionnel](https://hair-salon-en.lorealprofessionnel.com/60500-vero-ruiz-estilista)
- [Vero Ruiz Peluquería - Empresas de Córdoba](https://empresasdecordoba.com/pagina/Vero-Ruiz-Peluqueria/)
- [Vero Ruiz Peluquería - near-place.com](https://ar.near-place.com/vero-ruiz-peluqueria-avenida-colon-1455-cordoba)
- [Vero Ruiz Peluquería - Instagram](https://www.instagram.com/veroruizpeluqueria/)

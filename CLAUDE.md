# CLAUDE.md — Vero Ruiz Peluquería

Contexto del proyecto para Claude Code. Leer esto al iniciar cada sesión.

## Qué es

Sitio web **de muestra** para Vero Ruiz Peluquería (Córdoba, Argentina). Mismo enfoque
comercial que el sitio entregado a SHARP Peluquería: se construye sin costo, se le muestra
a la dueña por WhatsApp/redes y se ofrece transferírselo (con o sin ajustes) si lo quieren.

- **Estado:** completo y publicado. Es un sitio de muestra, falta confirmación de datos con el negocio.
- **Stack:** HTML + CSS + JavaScript **puro** (estático, sin build, sin frameworks).
- **Idioma:** español rioplatense (Argentina).

## URLs en producción

| Recurso | URL |
|---|---|
| **Sitio (Vercel, principal)** | https://vero-ruiz-peluqueria.vercel.app/ |
| Sitio (GitHub Pages, espejo) | https://sojitdigital.github.io/vero-ruiz-peluqueria/ |
| Repo GitHub (público) | https://github.com/sojitdigital/vero-ruiz-peluqueria |

Cuenta GitHub: **sojitdigital** (git user: Martin / sojitdigital@gmail.com).

## Deploy / workflow

- **Auto-deploy:** Vercel está conectado al repo de GitHub. Cada `git push` a `main`
  redeploya Vercel automáticamente (~1 min). GitHub Pages también sirve desde `main`.
- Para publicar cambios:
  ```
  git add -A && git commit -m "descripción" && git push
  ```
- `gh` CLI está instalado (`C:\Program Files\GitHub CLI\gh.exe`) pero **no logueado**.
  El push funciona por credenciales guardadas (`credential.helper=store`).

## Estructura del proyecto

```
index.html              # Página única (todas las secciones)
assets/
  css/styles.css        # Todos los estilos
  js/data.js            # TODOS los datos (servicios, equipo, testimonios, contacto, config)
  js/main.js            # Render dinámico + interacciones (menú, reveal, WhatsApp)
  img/                  # Imágenes optimizadas para web (1.6 MB total)
data/servicios.json     # Lista completa de precios (fuente; NO se usa en el sitio actual)
BRIEF.md                # Brief original con toda la info del negocio y fuentes
Imagenes/               # Fotos originales + volcados de Instagram. GITIGNORED (no subir).
```

### Secciones del sitio (en orden)
Hero → Destacados → **Especialidades** (reemplazó la lista de precios) → Equipo/Nosotras
→ Testimonios → Galería → CTA reservar → Contacto (mapa) → Footer. Botón flotante WhatsApp.

## Decisiones de diseño tomadas (no revertir sin avisar)

- **Dirección visual propia** (NO copiar la de SHARP): editorial cálido / lujo.
  Paleta **cobre/terracota + espresso sobre marfil**. Tipografía **Fraunces** (serif display)
  + **Jost** (sans body). Variables CSS en `:root` de `styles.css`.
- **Sin precios en el sitio.** La sección de precios ("Nuestra carta") fue reemplazada por
  **"En lo que somos expertas"**: 6 tarjetas de especialidades con foto real + descripción,
  CTA "Consultar" → WhatsApp. Los precios siguen en `data/servicios.json` por si los piden.
- **Logo:** archivo de baja resolución (150×150, blanco sobre negro). Se muestra en chip
  oscuro redondeado a **68 px** en el header. ⚠️ No agrandarlo más de ~75 px o se ve borroso
  (se está achicando, no agrandando). Si consiguen logo en alta, se puede hacer más grande.

## Datos clave del negocio

- **Dirección:** Av. Colón 1455, Planta Baja, Barrio Alberdi, Córdoba Capital. Coords -31.4079111, -64.2029462
- **Horario:** Martes a sábado 10:00–20:00. Lunes y domingo cerrado.
- **Rating:** 4.6/5 (23 reseñas, AgendaPro).
- **Certificación:** Salón L'Oréal Professionnel, especialistas en colorimetría (color iNOA sin amoníaco). +25 años.
- **Equipo:** Vero Ruiz (dueña), Dani Cristin, Analía Campal, Carina Bustos, Jorgelin, Emi Acosta.
- **Redes:** IG @veroruizpeluqueria (~22k) · Facebook · TikTok @veroruizpeluqueria.
- **WhatsApp en uso:** `+54 9 351 512-8972` (de AgendaPro). Hay otro a confirmar: `+54 9 351 615-3081`.

## Convenciones / cosas a recordar

- **Editar el WhatsApp en un solo lugar:** `assets/js/data.js` → `SITE.config.whatsapp`
  (formato internacional sin signos: `5493515128972`).
- **Cache busting:** los `<link>`/`<script>` en `index.html` llevan `?v=N`. Si editás
  `styles.css`, `data.js` o `main.js`, **subí el número de versión** o el navegador sirve el viejo.
- **Optimización de imágenes:** las fotos originales (carpeta `Imagenes/`) pesan 1–2 MB.
  Se reducen con un script Python + PIL (resize LANCZOS, JPEG quality ~82, progressive) y se
  guardan en `assets/img/`. Mantener todo liviano. PIL/Python están disponibles.
- **Mapa:** iframe de Google Maps con coords, sin API key (`...output=embed`).
- **Servir local para previsualizar:** `python -m http.server 5500` (o `--bind 0.0.0.0`
  para verlo desde el celu en la misma red WiFi; la IP LAN de la PC fue 192.168.0.168).
- **Verificación visual:** se usa la skill `agent-browser` para screenshots. Ojo: en
  screenshots `--full` las secciones con clase `.reveal` salen invisibles (animación on-scroll);
  forzarlas con `document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'))`.

## Pendientes (antes de cerrar con el negocio)

- [ ] Confirmar cuál de los dos WhatsApp está vigente.
- [ ] Conseguir el logo en alta resolución (para mostrarlo más grande / wordmark al lado).
- [ ] Confirmar precios/datos finales con Vero.
- [ ] (Opcional) Sección Antes/Después; favicon en PNG/ICO (hoy es JPG).
```

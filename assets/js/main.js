/* =====================================================================
   Vero Ruiz Peluquería — lógica del sitio
   ===================================================================== */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const fmt = new Intl.NumberFormat("es-AR");
  const peso = (n) => "$" + fmt.format(n);

  // --- Iconos SVG inline (sin emojis) ------------------------------------
  const ICONS = {
    color:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.6 0 2-1 2-2 0-.7-.4-1.2-.4-1.8 0-.6.5-1.2 1.4-1.2H17a4 4 0 0 0 4-4c0-4.4-4-9-9-9Z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/></svg>',
    scissors:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
    leaf:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2.1 1.5 3.7 3.5 4v2.6c-1.3 0-2.5-.4-3.5-1v6.3a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.7a3.2 3.2 0 1 0 2.3 3.1V3h2.7Z"/></svg>',
  };

  // --- WhatsApp ----------------------------------------------------------
  function waUrl() {
    const c = SITE.config;
    return (
      "https://wa.me/" +
      c.whatsapp +
      "?text=" +
      encodeURIComponent(c.mensajeWhatsApp)
    );
  }

  function wireWhatsApp() {
    const url = waUrl();
    $$("[data-wa]").forEach((el) => {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  // --- Render: destacados ------------------------------------------------
  function renderHighlights() {
    const grid = $("#highlightGrid");
    if (!grid) return;
    grid.innerHTML = SITE.destacados
      .map(
        (d) => `
      <article class="h-card reveal">
        <div class="h-icon" aria-hidden="true">${ICONS[d.icon] || ""}</div>
        <h3>${d.titulo}</h3>
        <p>${d.desc}</p>
      </article>`
      )
      .join("");
  }

  // --- Render: especialidades -------------------------------------------
  function renderEspecialidades() {
    const grid = $("#espGrid");
    if (!grid) return;
    grid.innerHTML = SITE.especialidades
      .map(
        (e) => `
        <article class="esp-card reveal">
          <div class="esp-img">
            <img src="${e.img}" alt="${e.alt}" loading="lazy" width="506" height="900" />
          </div>
          <div class="esp-body">
            <h3>${e.titulo}</h3>
            <p>${e.desc}</p>
            <a class="esp-link" data-wa>Consultar<span aria-hidden="true"> →</span></a>
          </div>
        </article>`
      )
      .join("");
  }

  // --- Render: equipo ----------------------------------------------------
  function renderTeam() {
    const list = $("#teamList");
    if (!list) return;
    list.innerHTML = SITE.equipo
      .map((m) => {
        const ini = m.nombre.trim().charAt(0).toUpperCase();
        return `
        <div class="team-member">
          <span class="tm-avatar" aria-hidden="true">${ini}</span>
          <span>
            <span class="tm-name">${m.nombre}</span><br />
            <span class="tm-role">${m.rol}</span>
          </span>
        </div>`;
      })
      .join("");
  }

  // --- Render: testimonios ----------------------------------------------
  function renderTestimonials() {
    const grid = $("#testiGrid");
    if (!grid) return;
    grid.innerHTML = SITE.testimonios
      .map(
        (t) => `
      <blockquote class="testi-card reveal">
        <span class="testi-quote" aria-hidden="true">&ldquo;</span>
        <p class="testi-text">${t.texto}</p>
        <footer class="testi-author">${t.autor}</footer>
      </blockquote>`
      )
      .join("");
  }

  // --- Render: contacto + footer ----------------------------------------
  function renderContact() {
    const c = SITE.contacto;
    const cfg = SITE.config;

    const addr = $("#addrLine");
    if (addr) addr.innerHTML = `${c.direccion}<br />${c.ciudad}`;
    const hours = $("#hoursLine");
    if (hours) hours.innerHTML = `${c.horario}<br /><small style="color:var(--espresso-2)">Lunes y domingo cerrado</small>`;
    const wa = $("#waLine");
    if (wa) wa.textContent = cfg.whatsappDisplay;

    const ratingValue = $("#ratingValue");
    if (ratingValue) ratingValue.textContent = c.rating;
    const reviewCount = $("#reviewCount");
    if (reviewCount) reviewCount.textContent = c.reseñas;

    // Socials
    const socials = $("#socials");
    if (socials) {
      socials.innerHTML = `
        <a href="${c.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
        <a href="${c.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
        <a href="${c.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>`;
    }

    const meta = $("#footerMeta");
    if (meta) {
      meta.innerHTML = `
        <p>${c.direccion}</p>
        <p>${c.horarioCorto}</p>
        <p><a href="${waUrl()}" target="_blank" rel="noopener">WhatsApp ${cfg.whatsappDisplay}</a></p>`;
    }

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  // --- Menú móvil --------------------------------------------------------
  function wireNav() {
    const toggle = $("#navToggle");
    const nav = $("#mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Header con sombra al hacer scroll --------------------------------
  function wireHeader() {
    const header = $(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // --- Reveal on scroll --------------------------------------------------
  function wireReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  // --- Init --------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    renderHighlights();
    renderEspecialidades();
    renderTeam();
    renderTestimonials();
    renderContact();
    wireWhatsApp();
    wireNav();
    wireHeader();
    wireReveal(); // después de renderizar para observar los .reveal nuevos
  });
})();

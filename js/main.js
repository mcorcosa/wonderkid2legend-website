/**
 * W2L Facepack site – smooth scroll and mobile nav.
 */

(function () {
  "use strict";

  // Smooth scroll for anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        const nav = document.querySelector(".nav-inner");
        if (nav && nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          const toggle = document.querySelector(".nav-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  });

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-inner");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  // Show more / Show less players
  const showMoreBtn = document.querySelector("[data-show-more]");
  const allPlayersBlock = document.getElementById("all-players");
  if (showMoreBtn && allPlayersBlock) {
    showMoreBtn.addEventListener("click", function () {
      const expanded = allPlayersBlock.hidden;
      allPlayersBlock.hidden = !expanded;
      showMoreBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
      showMoreBtn.textContent = expanded ? "Show less" : "Show more players";
    });
  }

  // Optional: lazy-load images error handling – avoid broken icon if image missing
  document.querySelectorAll(".faces-grid img").forEach(function (img) {
    img.addEventListener("error", function () {
      this.style.background = "var(--bg-card, #1e293b)";
      this.style.minHeight = "140px";
      this.alt = "";
    });
  });
})();

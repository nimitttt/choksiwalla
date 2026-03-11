const body = document.body;
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const menuOverlay = document.getElementById("menuOverlay");

function setMenuState(isOpen) {
  if (!menuOverlay || !menuToggle) return;

  menuOverlay.classList.toggle("open", isOpen);
  body.classList.toggle("menu-open", isOpen);
  menuOverlay.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function initMenu() {
  if (!menuToggle || !menuOverlay) return;

  menuToggle.addEventListener("click", () => setMenuState(true));

  if (menuClose) {
    menuClose.addEventListener("click", () => setMenuState(false));
  }

  menuOverlay.addEventListener("click", (event) => {
    if (event.target === menuOverlay) {
      setMenuState(false);
    }
  });

  document.querySelectorAll(".menu-panel a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

function renderFeaturedCards() {
  const featuredWrap = document.getElementById("featuredCards");
  const data = window.CJ_DATA?.featuredCards;

  if (!featuredWrap || !data?.length) return;

  featuredWrap.innerHTML = data
    .map(
      (item, index) => `
      <article class="feature-card" data-testid="home-feature-card-${index + 1}">
        <div class="media-wrap">
          <img src="${item.image}" alt="${item.alt}" loading="lazy" data-testid="home-feature-card-image-${index + 1}" />
        </div>
        <h2 data-testid="home-feature-card-title-${index + 1}">${item.title}</h2>
      </article>
    `,
    )
    .join("");
}

initMenu();
renderFeaturedCards();
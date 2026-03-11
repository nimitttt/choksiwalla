const galleryGrid = document.getElementById("galleryGrid");
const galleryItems = window.CJ_DATA?.galleryItems || [];

if (galleryGrid && galleryItems.length) {
  galleryGrid.innerHTML = galleryItems
    .map(
      (item, index) => `
      <a href="image.html?id=${item.id}" class="gallery-tile" data-testid="gallery-image-link-${index + 1}" aria-label="Open ${item.title}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" data-testid="gallery-image-${index + 1}" />
      </a>
    `,
    )
    .join("");
}
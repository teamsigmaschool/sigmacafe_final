// js/menu.js: Menu page (uses MENU_ITEMS from data/menu.js)

const list = document.getElementById("menu-list");
const chips = document.querySelectorAll(".chip");

function render(items) {
  if (items.length === 0) {
    list.innerHTML = '<p class="empty">No items found.</p>';
    return;
  }
  list.innerHTML = items
    .map(
      (item) => `
    <article class="item">
      <div class="icon" aria-hidden="true">${item.icon}</div>
      <h3>${item.name}</h3>
      <p class="desc">${item.description}</p>
      <span class="price">RM ${item.price.toFixed(2)}</span>
    </article>
  `,
    )
    .join("");
}

/*
 * 🐞 BUG 2: Menu: clicking ANY category button (even All) shows "No items found."
 *
 * Symptom:  the page loads with all 8 items. Click Coffee, Tea, Food or even All
 *           and the list becomes "No items found." There is NO error in the console.
 *
 * Fix: trim the text:
 *     filterBy(chip.textContent.trim())
 */
function filterBy(category) {
  const wanted = category.toLowerCase();
  if (wanted === "all") {
    render(MENU_ITEMS);
    return;
  }
  const filtered = MENU_ITEMS.filter((item) => item.category === wanted);
  render(filtered);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => filterBy(chip.textContent.trim())); // Was: no .trim()
});

render(MENU_ITEMS);

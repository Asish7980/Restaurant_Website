const menuItems = [
  { name: "Garlic Bread", desc: "Toasted bread with garlic & butter", price: "₹99", category: "veg", icon: "🍞" },
  { name: "Chicken Biryani", desc: "Spiced chicken with basmati rice", price: "₹299", category: "non-veg", icon: "🍗" },
  { name: "Paneer Butter Masala", desc: "Creamy cottage cheese curry", price: "₹249", category: "veg", icon: "🧀" },
  { name: "Spaghetti Alfredo", desc: "Creamy pasta with mushrooms", price: "₹229", category: "veg", icon: "🍝" },
  { name: "Gulab Jamun", desc: "Traditional Indian dessert", price: "₹89", category: "dessert", icon: "🍮" },
  { name: "Chocolate Brownie", desc: "Served with vanilla ice cream", price: "₹159", category: "dessert", icon: "🍫" },
  { name: "Lemon Mint Cooler", desc: "Refreshing lemon-mint drink", price: "₹79", category: "drink", icon: "🍹" },
  { name: "Masala Chai", desc: "Spiced Indian tea", price: "₹49", category: "drink", icon: "☕" }
];

function displayMenu(items) {
  const container = document.getElementById("menu-grid");
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card " + item.category;
    card.innerHTML = `
      <h3>${item.icon} ${item.name}</h3>
      <p>${item.desc}</p>
      <span class="price">${item.price}</span>
    `;
    container.appendChild(card);
  });
}

function filterMenu(category) {
  if (category === 'all') {
    displayMenu(menuItems);
  } else {
    const filtered = menuItems.filter(item => item.category === category);
    displayMenu(filtered);
  }
}
// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
});


function typeText(el, text, delay = 30) {
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, delay);
    }
  }
  typeChar();
}

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typed-desc");

  elements.forEach((el, index) => {
    const fullText = el.textContent;
    el.textContent = "";
    setTimeout(() => {
      typeText(el, fullText);
    }, index * 300); // stagger animation
  });
});


function typeText(el, text, delay = 30) {
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, delay);
    }
  }
  typeChar();
}

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typed-desc");

  elements.forEach((el, index) => {
    const fullText = el.textContent;
    el.textContent = "";
    setTimeout(() => {
      typeText(el, fullText);
    }, index * 300); // stagger delay
  });
});

// Initial load
window.onload = () => displayMenu(menuItems);


document.getElementById("reservation-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your reservation has been submitted!");
});

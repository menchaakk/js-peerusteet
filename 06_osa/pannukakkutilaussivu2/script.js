// Selectors
const form = document.querySelector(".form-container");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");
const button = document.querySelector("button");

// State
let totalPrice;
let toppings = {};
let extras = {};

// Functions
const calculateTotalPrice = () => {
  totalPrice = parseInt(typeSelect.value);
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += parseInt(checkbox.value);
    }
  });
  return totalPrice;
};

const updatePriceBanner = (totalPrice) => {
  const totalPriceElement = document.querySelector("#totalPrice");
  totalPriceElement.textContent = `${totalPrice}€`;
  totalPriceElement.classList.add("animate");
  setTimeout(() => {
    totalPriceElement.classList.remove("animate");
  }, 100);
};

const addItem = (itemName, category) => {
  if (category === "toppings") {
    toppings[itemName] = true;
  } else {
    extras[itemName] = true;
  }
};

const removeItem = (itemName, category) => {
  if (category === "toppings") {
    delete toppings[itemName];
  } else {
    delete extras[itemName];
  }
};

const checkToppings = () => {
  toppings = {};
  extras = {};
  checkboxes.forEach((checkbox) => {
    const itemName = checkbox.dataset.name;
    const category = checkbox.dataset.category;
    if (checkbox.checked) {
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  });
};

const displayOrder = () => {
  const customerName = document.querySelector("#customerName").value;
  const orderType = document.querySelector("#order_type");
  const orderToppings = document.querySelector("#order_toppings");
  const orderExtras = document.querySelector("#order_extras");
  const orderName = document.querySelector("#order_name");
  const orderPrice = document.querySelector("#order_price");

  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = Object.keys(toppings).join(", ");
  orderExtras.textContent = Object.keys(extras).join(", ");
  orderName.textContent = customerName;
  orderPrice.textContent = totalPrice + "€";
};

// Event listeners
form.addEventListener("change", () => {
  totalPrice = calculateTotalPrice();
  updatePriceBanner(totalPrice);
  checkToppings();
});
button.addEventListener("click", displayOrder);

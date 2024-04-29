/*option.value + input type="checkbox".value = total price*/

const selectElement = document.getElementById("type");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPriceElement = document.querySelectorAll("span#totalPrice");

function updateTotalPrice() {
  const pancakePrice = parseInt(selectElement.value);
  let totalPrice = pancakePrice;
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      totalPrice += parseInt(checkbox.value);
    }
  });
  totalPriceElement.forEach(function (element) {
    element.textContent = totalPrice + "€";
  });
}
selectElement.addEventListener("change", updateTotalPrice);
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", updateTotalPrice);
});

updateTotalPrice();

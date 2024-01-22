var cart = [];

// Funktion zum Hinzufügen eines Produkts zum Warenkorb
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Funktion zum Aktualisieren des Warenkorb-Inhalts
function updateCart() {
  var warenkorbDiv = document.getElementById("warenkorb");
  warenkorbDiv.innerHTML = "";

  for (var i = 0; i < cart.length; i++) {
    var item = document.createElement("div");
    item.textContent = cart[i];
    warenkorbDiv.appendChild(item);
  }
}

// Funktion zum Leeren des Warenkorbs
function clearCart() {
  cart = [];
  updateCart();
}

// Funktion zum Weiterleiten zur Kasse
function checkout() {
  // Hier kann die Weiterleitungslogik zur Kasse implementiert werden
}
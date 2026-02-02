const YEAR = document.getElementById("year");
if (YEAR) YEAR.textContent = new Date().getFullYear();

/**
 * 1) CAMBIA AQUÍ TU NÚMERO (10 dígitos) -> EJ: 4441234567
 *    El script lo convierte a formato wa.me/524447947990
 */
const PHONE_10_DIGITS = "4447947990"; // <- PON TU NÚMERO AQUÍ

function waLink(message) {
  const phone = `52${PHONE_10_DIGITS}`;
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

// Botones generales
const btnVideo = document.getElementById("btnVideoWA");
const btnFinal = document.getElementById("btnFinalWA");
const phoneText = document.getElementById("phoneText");

if (phoneText) phoneText.textContent = `+52 ${PHONE_10_DIGITS}`;

if (btnVideo) {
  btnVideo.href = waLink("Hola MC Design 👋 Quiero hacer un pedido. ¿Me das info y catálogo?");
}
if (btnFinal) {
  btnFinal.href = waLink("Hola MC Design 👋 Tengo una idea y quiero cotizar un pedido. ¿Me ayudas?");
}

// Botones por producto (auto)
document.querySelectorAll(".wa-product").forEach(a => {
  const prod = a.dataset.product || "Producto";
  const price = a.dataset.price || "";
  a.href = waLink(`Hola MC Design 👋 Quiero cotizar: ${prod}. ${price}. ¿Me das opciones y tiempos?`);
});

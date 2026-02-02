const YEAR = document.getElementById("year");
if (YEAR) YEAR.textContent = new Date().getFullYear();

/**
 * Número base (known good)
 * NO pongas espacios ni guiones aquí
 */
const PHONE_10_DIGITS = "4447947990";

/**
 * Formato visual bonito: 444 794 7990
 */
function formatPhoneMX(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

/**
 * Link real de WhatsApp (wa.me necesita solo números)
 */
function waLink(message) {
  const phone = `52${PHONE_10_DIGITS}`;
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

// Elementos
const btnVideo = document.getElementById("btnVideoWA");
const btnFinal = document.getElementById("btnFinalWA");
const phoneText = document.getElementById("phoneText");

// Mostrar teléfono bonito
if (phoneText) {
  phoneText.textContent = `+52 ${formatPhoneMX(PHONE_10_DIGITS)}`;
}

// Botón video
if (btnVideo) {
  btnVideo.href = waLink(
    "Hola MC Design 👋 Quiero hacer un pedido. ¿Me das info y catálogo?"
  );
}

// Botón final
if (btnFinal) {
  btnFinal.href = waLink(
    "Hola MC Design 👋 Tengo una idea y quiero cotizar un pedido. ¿Me ayudas?"
  );
}

// Botones por producto
document.querySelectorAll(".wa-product").forEach(a => {
  const prod = a.dataset.product || "Producto";
  const price = a.dataset.price || "";
  a.href = waLink(
    `Hola MC Design 👋 Quiero cotizar: ${prod}. ${price}. ¿Me das opciones y tiempos?`
  );
});

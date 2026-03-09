const CONTACT = {
  primaryWhatsApp: "4447947990",
  secondaryPhone: "4401704214",
  countryCode: "52"
};

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

function formatPhoneMX(phone) {
  const cleaned = String(phone).replace(/\D/g, "");
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

function makeWaLink(message) {
  const phone = `${CONTACT.countryCode}${CONTACT.primaryWhatsApp}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function makeTelLink(phone) {
  return `tel:+${CONTACT.countryCode}${String(phone).replace(/\D/g, "")}`;
}

function setLink(id, href, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href;
  if (text) el.textContent = text;
}

const primaryLabel = `+52 ${formatPhoneMX(CONTACT.primaryWhatsApp)}`;
const secondaryLabel = `+52 ${formatPhoneMX(CONTACT.secondaryPhone)}`;

setLink(
  "btnHeroWA",
  makeWaLink("Hola MC Design 👋 Quiero cotizar un producto personalizado. ¿Me compartes opciones?"),
);
setLink(
  "btnVideoWA",
  makeWaLink("Hola MC Design 👋 Vi su video y quiero más información sobre sus productos personalizados."),
);
setLink(
  "btnFinalWA",
  makeWaLink("Hola MC Design 👋 Quiero hacer un pedido personalizado. ¿Me apoyas con la cotización?"),
);
setLink(
  "floatingWA",
  makeWaLink("Hola MC Design 👋 Me interesa cotizar un producto personalizado."),
);

setLink("heroPhonePrimary", makeWaLink("Hola MC Design 👋 Quiero información sobre sus servicios."), primaryLabel);
setLink("heroPhoneAlt", makeTelLink(CONTACT.secondaryPhone), secondaryLabel);
setLink("contactPrimary", makeWaLink("Hola MC Design 👋 Quiero información y catálogo."), `WhatsApp principal: ${primaryLabel}`);
setLink("contactAlt", makeTelLink(CONTACT.secondaryPhone), `Contacto alterno: ${secondaryLabel}`);

document.querySelectorAll(".wa-product").forEach((button) => {
  const product = button.dataset.product || "producto personalizado";
  button.href = makeWaLink(`Hola MC Design 👋 Quiero cotizar ${product}. ¿Me das opciones y tiempos de entrega?`);
});

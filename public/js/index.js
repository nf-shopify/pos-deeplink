//state
const orderButtonEl = document.querySelector("button.order-button");
const orderInputEl = document.getElementById("order-id");
const draftOrderButtonEl = document.querySelector("button.draft-order-button");
const draftOrderInputEl = document.getElementById("draft-order-id");
const checkoutButtonEl = document.querySelector("button.checkout-token-button");
const checkoutInputEl = document.getElementById("checkout-token-id");
const appButtonEl = document.querySelector("button.pos-app-button");
const appInputEl = document.getElementById("pos-app-id");

orderButtonEl.addEventListener("click", deepLink);
draftOrderButtonEl.addEventListener("click", deepLink);
checkoutButtonEl.addEventListener("click", deepLink);
appButtonEl.addEventListener("click", deepLink);

function deepLink(evt) {
  const src = evt.srcElement.className;
  switch (src) {
    case "order-button":
      console.log("Order button clicked");
      const orderId = orderInputEl.value;
      window.location.href = `com.shopify.pos://orderDetails/${orderId}`;
      break;
    case "draft-order-button":
      console.log("Draft Order button clicked");
      const draftOrderId = draftOrderInputEl.value;
      window.location.href = `com.shopify.pos://orders/draftOrderDetails/${draftOrderId}`;
      break;
    case "checkout-token-button":
      console.log("Checkout token button clicked");
      const checkoutToken = checkoutInputEl.value;
      window.location.href = `com.shopify.pos://retailInstallments/${checkoutToken}`;
      break;
    case "pos-app-button":
      console.log("POS App button clicked");
      const url = appInputEl.value;
      window.location.href = `com.shopify.pos://pos-ui-extensions?url=${url}`;
      break;
  }
}

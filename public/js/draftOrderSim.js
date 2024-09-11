//state
let orderCreated = false;
let id;
const buttonEl = document.querySelector("button.order-button")
const draftOrderMsgEl = document.querySelector("p.draft-order-msg")

buttonEl.addEventListener("click", toggleCart);

async function toggleCart() {
  if (!orderCreated) {
    orderCreated = true;
    console.log("Creating Draft Order");
    const id  = await createDraftOrder();
    buttonEl.textContent = "Deep link to draft order in Shopify POS";
    draftOrderMsgEl.textContent =`Draft Order Created via Admin API - ID : ${id}`
  } else {
    window.location.href =
      `com.shopify.pos://orders/draftOrderDetails/${id}`;
  }
}

async function createDraftOrder() {
    const res = await fetch("/api/draftorders");
    draftOrderData = await res.json();
    console.log(draftOrderData);
    id  = draftOrderData?.draftOrderCreate?.draftOrder?.legacyResourceId
    return id;
  }

//state
let orderCreated = false;
let id;
const button = document.getElementById("orderButton");

button.addEventListener("click", toggleCart);

function toggleCart() {
  if (!orderCreated) {
    orderCreated = true;
    console.log("About to create draft Order");
    createDraftOrder();
    button.textContent = "Open Order in Shopify POS";
  } else {
    window.location.href =
      `com.shopify.pos://orders/draftOrderDetails/${id}`;
  }
}

async function createDraftOrder() {
    const res = await fetch("/draftorders");
    draftOrderData = await res.json();
    console.log(draftOrderData);
    id  = draftOrderData?.draftOrderCreate?.draftOrder?.legacyResourceId
  }

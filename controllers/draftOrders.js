const draftOrder = require("../models/draftOrder.js");

module.exports = {
  createDraftOrder,
};

async function createDraftOrder(req, res) {
  const mutationQuery =
    "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) {draftOrder {id, legacyResourceId, invoiceUrl}}}";

  const input = {
    customerId: "gid://shopify/Customer/22182663815224",
    note: "Draft Order Generated via API",
    email: "zoe.smith@example.com",
    taxExempt: false,
    billingAddress: {
      address1: "456 Main St",
      city: "Toronto",
      province: "Ontario",
      country: "Canada",
      zip: "Z9Z 9Z9",
    },
    lineItems: [
      {
        variantId: "gid://shopify/ProductVariant/48422488768568",
        quantity: 1,
      },
      {
        variantId: "gid://shopify/ProductVariant/48422488801336",
        quantity: 1,
      },
    ],
  };

  const jsonBody = JSON.stringify({
    query: mutationQuery,
    variables: { input },
  });

  const shopReq = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.API_TOKEN,
    },
    body: jsonBody,
  });
  const draftOrderRes = await shopReq.json();
  const data = draftOrderRes.data;
  console.log("control");
  console.log(data);
  res.json(data);
}

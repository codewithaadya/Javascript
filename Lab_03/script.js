const item1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const item2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const item3 = {
    name: "Bag",
    price: 800,
    qty: 1
};

// 2. Check that all prices are Numbers
console.log("Price type check:");

console.log(item1.name, typeof item1.price);
console.log(item2.name, typeof item2.price);
console.log(item3.name, typeof item3.price);

// Calculate each product subtotal
const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;

// Calculate grand total using manual aggregation
const grandTotal = subtotal1 + subtotal2 + subtotal3;

// 3. Tiered discount using nested ternary
const discountPercent =
    grandTotal >= 5000 ? 20
    : grandTotal >= 2000 ? 10
    : grandTotal >= 1000 ? 5
    : 0;

// Calculate discount amount
const discountAmount =
    grandTotal * discountPercent / 100;

// Calculate amount after discount
const amountAfterDiscount =
    grandTotal - discountAmount;

// 4. Apply 18% GST
const gst =
    amountAfterDiscount * 18 / 100;

// Calculate final payable amount
const finalPayable =
    amountAfterDiscount + gst;

// 5. Free shipping
// Free if amount after discount >= 1500
// OR there are 3 or more distinct items

const numberOfItems = 3;

const freeShipping =
    amountAfterDiscount >= 1500 || numberOfItems >= 3;

// 7. Print the receipt

console.log("========== RECEIPT ==========");

console.log(item1.name + " - ₹" + subtotal1);
console.log(item2.name + " - ₹" + subtotal2);
console.log(item3.name + " - ₹" + subtotal3);

console.log("-----------------------------");

console.log("Grand Total: ₹" + grandTotal);

console.log("Discount: " + discountPercent + "%");

console.log(
    "Discount Amount: ₹" + discountAmount.toFixed(2)
);

console.log(
    "After Discount: ₹" + amountAfterDiscount.toFixed(2)
);

console.log(
    "GST (18%): ₹" + gst.toFixed(2)
);

console.log(
    "Final Payable: ₹" + finalPayable.toFixed(2)
);

console.log(
    "Shipping: " +
    (freeShipping ? "FREE" : "₹100 shipping charge")
);

console.log("=============================");

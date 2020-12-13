import React, { useState } from "react";
import getStripe from "../utils/stripe";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  margin: "0 1rem 0 1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
};

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const price = new FormData(event.target).get("priceSelect");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/services`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <label>
            Price{" "}
            <select name="priceSelect">
              {product.prices.map((price) => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <button className="button secondary">Pay for this Service</button>
      </form>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { Link } from "../utils";
// let stripePromise;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
//   }
//   return stripePromise;
// };

const Checkout = () => {
  //   const [loading, setLoading] = useState(false);

  //   const redirectToCheckout = async (event) => {
  //     event.preventDefault();
  //     setLoading(true);

  //     const stripe = await getStripe();
  //     const { error } = await stripe.redirectToCheckout({
  //       mode: "payment",
  //       lineItems: [{ price: "price_1HxjPrDDy1ejA5IQKKVxhx5o", quantity: 1 }],
  //       successUrl: `https://example.com/success`,
  //       cancelUrl: `http://localhost:8000`,
  //     });

  //     if (error) {
  //       console.warn("Error:", error);
  //       setLoading(false);
  //     }
  //   };

  return (
    <li className="menu-item menu-button">
      <Link to="/services/" className="button secondary">
        Make a Payment
      </Link>
    </li>
  );
};

export default Checkout;

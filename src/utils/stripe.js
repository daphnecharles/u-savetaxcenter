/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);
  }
  console.log("publishable key is: ", process.env.STRIPE_PUBLISHABLE_KEY);
  console.log("secret key is: ", process.env.STRIPE_SECRET_KEY);
  return stripePromise;
};

export default getStripe;
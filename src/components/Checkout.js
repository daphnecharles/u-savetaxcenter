import React from "react";
import { Link } from "../utils";

const Checkout = () => {
  return (
    <li className="menu-item menu-button">
      <Link to="/services/" className="button secondary">
        Make a Payment
      </Link>
    </li>
  );
};

export default Checkout;

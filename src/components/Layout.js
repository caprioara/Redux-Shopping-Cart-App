import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems"
import "./Layout.css";
const Layout = () => {
  let total = 100;

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        < CartItems />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;

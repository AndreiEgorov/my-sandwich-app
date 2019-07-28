import React from "react";

const OrderSummary = props => {
    console.log("ingredients", props)
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style = {{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A nice burger with these ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

export default OrderSummary;

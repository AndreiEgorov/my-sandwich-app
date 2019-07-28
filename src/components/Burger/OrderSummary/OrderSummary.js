import React from "react";
import Button from "../../UI/Button/Button"

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
      <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default OrderSummary;

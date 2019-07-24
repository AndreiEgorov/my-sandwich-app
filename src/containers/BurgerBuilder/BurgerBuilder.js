import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.4
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }, 
    totalPrice : 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + INGREDIENT_PRICES[type]
    this.setState({ingredients:updatedIngredients, totalPrice: newPrice})
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls ingredientAdded = {this.addIngredientHandler} />
        </div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;

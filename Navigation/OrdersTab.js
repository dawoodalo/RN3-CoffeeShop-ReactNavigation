import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Icon } from "native-base";
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";

const OrderTab = createStackNavigator(
  {
    CoffeeCart: CoffeeCart,
    OrderHistory: OrderHistory
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        <Icon type="FontAwesome" name="shopping-cart" size={20} />
    },
    initialRouteName: "CoffeeCart",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    }
  }
);

export default OrderTab;

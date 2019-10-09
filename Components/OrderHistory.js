import React from "react";

// NativeBase Components
import { H2 } from "native-base";
import { Text, List, Button, Icon } from "native-base";

// Component
import CartItem from "./CoffeeCart/CartItem";

//Data
import items from "../data/items";
// Component

const OrderHistory = () => {
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      {cartItems}
    </List>
  );
};
OrderHistory.navigationOptions = ({ navigation }) => {
  return {
    title: "Order History"
  };
};

export default OrderHistory;

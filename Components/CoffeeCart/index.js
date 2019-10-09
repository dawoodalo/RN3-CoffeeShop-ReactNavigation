import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Icon } from "native-base";

// Component
import CartItem from "./CartItem";

//Data
import items from "../../data/items";

const CoffeeCart = () => {
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <Button full danger>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};
CoffeeCart.navigationOptions = ({ navigation }) => {
  return {
    title: "Cart",
    headerRight: (
      <Icon
        onPress={() => navigation.push("OrderHistory")}
        type="FontAwesome"
        name="history"
        style={{ marginRight: 20 }}
      />
    )
  };
};

export default observer(CoffeeCart);

import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";
import { Icon } from "native-base";
const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>
        {shops}
      </List>
    </Content>
  );
};
CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerRight: (
      <Icon
        onPress={() => navigation.push("CoffeeCart")}
        type="AntDesign"
        name="shoppingcart"
        style={{ marginRight: 20 }}
      />
    ),
    headerLeft: null,
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "black"
  };
};

export default observer(CoffeeList);

import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Icon } from "native-base";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeeTab = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        <Icon type="FontAwesome" name="coffee" size={20} />
    },
    initialRouteName: "CoffeeList",
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

export default CoffeeTab;

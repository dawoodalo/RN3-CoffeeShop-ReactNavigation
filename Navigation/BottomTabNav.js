import { createBottomTabNavigator } from "react-navigation-tabs";

import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";

const BottomTabNav = createBottomTabNavigator(
  {
    AuthTab: AuthTab,
    CoffeeTab: CoffeeTab,
    OrdersTab: OrdersTab
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "rgb(20,90,100)"
      },
      inactiveBackgroundColor: "white",
      activeBackgroundColor: "#b8cdd0"
    }
  }
);

export default BottomTabNav;

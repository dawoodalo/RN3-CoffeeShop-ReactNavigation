import { createStackNavigator } from "react-navigation-stack";

import Login from "../Components/Login";
import HomePage from "../Components/HomePage";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const MyStackNav = createStackNavigator(
  {
    Login: Login,
    HomePage: HomePage,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "Login",
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

export default MyStackNav;

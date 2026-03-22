import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white,
            borderBottomColor: "transparent",
            elevation: 0, // for android
          },
          headerBackImage: () => (
            <Image source={require("../assets/icons/back.png")} />
          ),
          headerBackTitle: "",
          headerLeftContainerStyle: {
            alignItems: "center",
            marginLeft: theme.sizes.base * 2,
            paddingRight: theme.sizes.base,
          },
          headerRightContainerStyle: {
            alignItems: "center",
            paddingRight: theme.sizes.base,
          },
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerLeft: null }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

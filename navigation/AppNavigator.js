import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MyCart from "../screens/MyCart";
import ProductInfo from "../screens/ProductInfo";
import Payment from "../screens/Payment";
import Succsess from "../screens/Succsess";
import Pills from "../screens/Pills";
import MuscleAches from "../screens/MuscleAches";
import Headaches from "../screens/Headaches";
import AbdominalPain from "../screens/AbdominalPain";
import BackPain from "../screens/BackPain";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Succsess" component={Succsess} />
        <Stack.Screen name="Pills" component={Pills} />
        <Stack.Screen name="MuscleAches" component={MuscleAches} />
        <Stack.Screen name="Headaches" component={Headaches} />
        <Stack.Screen name="AbdominalPain" component={AbdominalPain} />
        <Stack.Screen name="BackPain" component={BackPain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

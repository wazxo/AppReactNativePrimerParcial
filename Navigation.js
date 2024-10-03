//Johelin Pascual Perez Valdez 2022-1131
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

//Vistas

import HomeScreen from "./screens/HomeScreens";
import MultipliScreen from "./screens/MultipliScreen";
import OperationScreen from "./screens/OperationScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Multiplicacion"
        component={MultipliScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculator-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Operacion"
        component={OperationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="swap-horizontal-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

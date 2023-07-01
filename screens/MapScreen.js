import { TouchableOpacity, View } from "react-native";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="absolute z-50 p-3 shadow-lg rounded-full top-16 left-8 bg-gray-100">
        <Icon name="menu" />
      </TouchableOpacity>
      <View className={"h-1/2"}>
        <Map />
      </View>
      <View className={"h-1/2"}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

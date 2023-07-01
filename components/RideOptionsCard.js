import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHANGE_RATE = 1.5;

export default function RideOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const { travelTimeInformation } = useSelector((state) => state.nav);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 z-50 left-5 p-3">
          <Icon type="font-awesome" name="chevron-left" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select Ride - {travelTimeInformation?.distance?.text}{" "}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => setSelected(item)}
              className={`flex-row justify-between items-center px-5 ${
                item.id === selected?.id && "bg-gray-100"
              }`}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <View className="-ml-6">
                <Text className="text-xl font-semibold">{item.title}</Text>
                <Text>{travelTimeInformation?.duration?.text} </Text>
              </View>

              <View>
                <Text className="text-xl">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "usd",
                  }).format(
                    (travelTimeInformation?.duration.value *
                      SURGE_CHANGE_RATE *
                      item.multiplier) /
                      100
                  )}{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

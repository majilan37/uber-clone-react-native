import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { styled } from "nativewind";
const StyledIcon = styled(Icon);
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Code Eye, London, UK",
  },
];

export default function NavFavorites() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5px]" />}
      renderItem={({ item: { id, destination, icon, location } }) => (
        <>
          <TouchableOpacity className="flex-row items-center p-5">
            <StyledIcon
              name={icon}
              type="ionicon"
              color={"white"}
              size={18}
              className="mr-4 rounded-full bg-gray-300 p-3 "
            />
            <View>
              <Text className="font-semibold text-lg">{location}</Text>
              <Text className="text-gray-500">{destination}</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    />
  );
}

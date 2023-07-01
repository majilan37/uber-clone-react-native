import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const { origin } = useSelector((state) => state.nav);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
          className="p-2 !pl-6 !pb-8 !pt-4 bg-gray-200 m-2 w-40">
          <View className={`${!origin && "opacity-20"}`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              style={{
                backgroundColor: "#000",
                width: 40,
                padding: 8,
                borderRadius: 10000,
                marginTop: 8,
              }}
              type="antdesign"
              name="arrowright"
              color={"white"}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

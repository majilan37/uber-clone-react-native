import { View, Text, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setDestination } from "../redux/slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import NavFavorites from "./NavFavorites";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <Text className="text-center py-5 text-xl">Good morning, Mohamed</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to ?"
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={{
              container: {
                flex: 0,
                backgroundColor: "#fff",
                paddingTop: 20,
              },
              textInput: {
                fontSize: 18,
                backgroundColor: "#DDDDDF",
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard");
            }}
            returnKeyType="search"
            fetchDetails
            enablePoweredByContainer={false}
            minLength={2}
            debounce={500}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
          />
        </View>
        <NavFavorites />
      </View>

      <View className="flex-row bg-white justify-evenly mt-auto border-t border-gray-100 py-2">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="flex-row bg-black w-24 space-x-3 px-4 py-3 rounded-full">
          <Icon type="font-awesome" name="car" color={"white"} size={16} />
          <Text className="text-white text-center ">Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row space-x-3  w-24 px-4 py-3 rounded-full">
          <Icon
            type="ionicon"
            name="fast-food-outline"
            color={"#000"}
            size={16}
          />
          <Text className=" text-center ">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

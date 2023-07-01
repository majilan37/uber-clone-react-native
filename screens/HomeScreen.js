import { View, Text, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";
import NavFavorites from "../components/NavFavorites";

export default function HomeScreen() {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 h-full !bg-white">
      <View className="p-5">
        <Image
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          keepResultsAfterBlur
          placeholder="Where from ?"
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
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

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
}

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import Booking from "../components/Booking";
import { StackMain } from "../components/Navigation";
import { BookingEntity } from "../entities/BookingEntity";

type createScreenProp = StackNavigationProp<StackMain, "Create">;

export default function ListScreen() {
  const navigation = useNavigation<createScreenProp>();
  const [bookings, setBookings] = useState([]);

  /* const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2"; */
  const fetchBookings = async () => {
    axios
      .get("https://15db-5-179-80-205.eu.ngrok.io/bookings")
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <View>
      <Text>This is the list Screen</Text>
      <Button
        title="Create"
        onPress={() => navigation.navigate("Create", { fetchBookings })}
      />
      <SafeAreaView>
        <FlatList
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} fetchBookings={fetchBookings} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </SafeAreaView>
      {/* <Button onPress={() => navigation.navigate("Edit")} title="Go to Edit"></Button> */}
    </View>
  );
}

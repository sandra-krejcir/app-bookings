import { useNavigation } from "@react-navigation/native";
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
import BottomTabs from "../components/BottomTabs";
import { BookingEntity } from "../entities/BookingEntity";

export default function ListScreen() {
  const [bookings, setBookings] = useState<BookingEntity[]>();
  const navigation = useNavigation();

  /* const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2"; */
  const fetchBookings = async () => {
    axios
      .get("https://c681-5-179-80-204.eu.ngrok.io/bookings")
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
      <SafeAreaView>
        <FlatList
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} fetchBookings={fetchBookings} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </SafeAreaView>
    </View>
  );
}

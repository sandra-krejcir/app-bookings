import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./ListScreenStack";
import axios from "axios";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function Booking({
  booking,
  fetchBookings,
}: {
  booking: BookingEntity;
  fetchBookings: () => void;
}) {
  const navigation = useNavigation<bookingScreenProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Edit", { booking, fetchBookings })}
    >
      <View style={{ display: "flex", flexDirection: "row", margin: 5 }}>
        <Text style={{ marginLeft: 10 }}>{booking.name}</Text>
        <Text style={{ marginLeft: 10 }}>{booking.numberOfPeople}</Text>
        <Text style={{ marginLeft: 10 }}>{booking.phone}</Text>
        <Text style={{ marginLeft: 10 }}>{booking.email}</Text>
        {/* <Text style={{ marginLeft: 10 }}>{booking.comment}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

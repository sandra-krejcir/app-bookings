import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./Navigation";
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

  const deleteBooking = async () => {
    axios
      .delete(`https://15db-5-179-80-205.eu.ngrok.io/bookings/${booking.id}`)
      .then((response) => {
        console.log(response.data);
        fetchBookings();
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        <Button title="Delete" onPress={() => deleteBooking()} />
      </View>
    </TouchableOpacity>
  );
}

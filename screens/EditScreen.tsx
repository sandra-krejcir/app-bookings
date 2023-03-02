import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import axios from "axios";

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;
  const fetchBookings: () => void = props.route.params.fetchBookings;
  const [name, setName] = useState(props.route.params.booking.name);
  const [numberOf, setNumberOf] = useState(
    props.route.params.booking.numberOfPeople
  );
  const [phone, setPhone] = useState(props.route.params.booking.phone);
  const [email, setEmail] = useState(props.route.params.booking.email);
  const [comment, setComment] = useState(props.route.params.booking.comment);
  console.log(name);

  const editBooking = async () => {
    axios
      .put(`https://15db-5-179-80-205.eu.ngrok.io/bookings/${booking.id}`, {
        name: name,
        numberOfPeople: numberOf,
        phone: phone,
        email: email,
        comment: comment,
      })
      .then((response) => {
        console.log(response.data);
        fetchBookings();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput onChangeText={(text) => setName(text)}>{name}</TextInput>
      <TextInput onChangeText={(text) => setNumberOf(text)}>
        {numberOf}
      </TextInput>
      <TextInput onChangeText={(text) => setPhone(text)}>{phone}</TextInput>
      <TextInput onChangeText={(text) => setEmail(text)}>{email}</TextInput>
      <TextInput onChangeText={(text) => setComment(text)}>{comment}</TextInput>
      <Button title="Edit" onPress={() => editBooking()} />
    </View>
  );
}

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
  TextInput,
} from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";

export default function CreateScreen(props: any) {
  const fetchBookings: () => void = props.route.params.fetchBookings;
  const [name, setName] = useState("");
  const [numberOf, setNumberOf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const createBooking = async () => {
    axios
      .post(`https://15db-5-179-80-205.eu.ngrok.io/bookings`, {
        name: name,
        numberOfPeople: numberOf,
        phone: phone,
        email: email,
        date: date,
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
      <TextInput onChangeText={(text) => setDate(text)}>{date}</TextInput>
      <TextInput onChangeText={(text) => setComment(text)}>{comment}</TextInput>
      <Button title="Create" onPress={() => createBooking()} />
    </View>
  );
}

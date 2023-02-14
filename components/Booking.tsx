import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BookingEntity } from '../entities/BookingEntity'
import { useNavigation } from '@react-navigation/native'

export default function Booking({booking}: {booking: BookingEntity}) {
    const navigation = useNavigation();

    return (
    <TouchableOpacity onPress={() => navigation.navigate("Edit", booking)}>
      <Text>{booking.name} {booking.phone}</Text>
    </TouchableOpacity>
  )
}
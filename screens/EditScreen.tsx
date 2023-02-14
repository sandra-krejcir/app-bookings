import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { BookingEntity } from '../entities/BookingEntity';

export default function EditScreen(props: any) {
    const booking = props.route.params;
    console.log(props.route.params);
    
    return (
    <View>
      <Text>{booking.name}</Text>
    </View>
  )
}
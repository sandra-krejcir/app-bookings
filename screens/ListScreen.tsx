import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, FlatList, Platform } from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";


export default function ListScreen() {
    const [bookings, setBookings] = useState([]);

    const local = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'

    useEffect(() => {
        const fetchBookings = async () => {
            axios.get('http://'+local+':3000/bookings').then(response => {
                console.log(response.data);
                setBookings(response.data);
            }).catch(error => {console.log(error);
            });
          };
          fetchBookings();
    }, [])

    
    return (
        <View>
            <Text>This is the list Screen</Text>
            <SafeAreaView>
                <FlatList
                    data={bookings}
                    renderItem={({item}:{item: BookingEntity}) => <Booking booking={item} />}
                    keyExtractor={item => ""+item.id}
                />
            </SafeAreaView>
            {/* <Button onPress={() => navigation.navigate("Edit")} title="Go to Edit"></Button> */}
        </View>
    );
  }
  
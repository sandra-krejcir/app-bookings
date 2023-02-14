import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";


export default function ListScreen() {
    // const navigation = useNavigation()

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await axios.get('http://localhost:3000/bookings');
            console.log(response.data);
            setBookings(response.data);
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
  
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookingEntity } from "../entities/BookingEntity";
import CreateScreen from "../screens/CreateScreen";
import EditScreen from "../screens/EditScreen";
import ListScreen from "../screens/ListScreen";

export type StackMain = {
  List: undefined;
  Edit: { booking: BookingEntity; fetchBookings: () => void };
  Create: { fetchBookings: () => void };
};

const Stack = createNativeStackNavigator<StackMain>();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

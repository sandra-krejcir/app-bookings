import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./components/BottomTabs";
import ListScreenStack from "./components/ListScreenStack";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs></BottomTabs>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

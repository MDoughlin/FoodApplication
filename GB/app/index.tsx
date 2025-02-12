import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VendorSignUp from "./screens/VendorSignUp";
import VendorHomeScreen from "./screens/VendorHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={VendorHomeScreen} />
      <Stack.Screen name="Vendor Sign Up" component={VendorSignUp} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

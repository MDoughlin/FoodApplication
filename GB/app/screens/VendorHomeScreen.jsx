import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const VendorHomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Vendor Home!</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("Vendor Sign Up")}
      />
    </View>
  );
};

export default VendorHomeScreen;

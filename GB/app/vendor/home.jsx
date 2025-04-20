import { useRouter } from "expo-router";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const VendorHomeScreen = () => {
  const router = useRouter();

  let dummyVendor = {
    id: "1",
    name: "Juicy Grillz",
    phoneNumber: "+1 (246) 123-4567",
    location: "Bridgetown, Barbados",
    hours: {
      Monday: "9am - 5pm",
      Tuesday: "9am - 5pm",
      Wednesday: "9am - 5pm",
      Thursday: "9am - 5pm",
      Friday: "9am - 10pm",
      Saturday: "10am - 4pm",
      Sunday: "Closed",
    },
    cuisine: ["Caribbean", "Grill", "Seafood"],
    paymentMethods: ["Cash", "Credit Card", "CIBC Transfer"],
    instagram: "https://instagram.com/juicygrillz246",
  };

  const vendorExists = !!dummyVendor;

  return (
    <View style={styles.container}>
      {vendorExists ? (
        <TouchableOpacity
          style={styles.circle}
          onPress={() => router.push("/vendor/dashboard")}
        >
          <Text style={styles.circleText}>{dummyVendor.name.charAt(0)}</Text>
          <MaterialCommunityIcons
            style={styles.addButton}
            name="plus-circle-outline"
            size={40}
            onPress={() => router.push("/vendor/sign-up")}
          />
        </TouchableOpacity>
      ) : (
        <>
          <Text>Welcome to Vendor Home!</Text>
          <Button
            title="Go to Sign Up"
            onPress={() => router.push("/vendor/sign-up")}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    left: 275,
    top: 650,
  },
});

export default VendorHomeScreen;

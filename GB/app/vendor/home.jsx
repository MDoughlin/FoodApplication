import { useRouter } from "expo-router";
import React from "react";
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
          // onPress={() => router.push("/vendor/sign-up")}
        >
          <Text style={styles.circleText}>{dummyVendor.name.charAt(0)}</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "orange", // 👀 visible color
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default VendorHomeScreen;

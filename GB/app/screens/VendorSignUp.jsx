import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { CheckBox } from "../../components/CheckBox";

const VendorSignUp = () => {
  const [step1Data, setStep1Data] = useState({ nameOfBusiness: "" });
  const [step2Data, setStep2Data] = useState({ phoneNumber: "" });
  const [step3Data, setStep3Data] = useState({
    Sunday: "",
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
  });
  const [payment, setPayment] = useState([]);
  const [cuisine, setCuisine] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressSteps>
        <ProgressStep label="Step 1">
          <View style={styles.stepContent}>
            <Text>Name of Business</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Business"
              value={step1Data.nameOfBusiness}
              onChangeText={(text) =>
                setStep1Data({ ...step1Data, nameOfBusiness: text })
              }
            />
          </View>
        </ProgressStep>

        <ProgressStep label="Step 2">
          <View style={styles.stepContent}>
            <Text>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={step2Data.phoneNumber}
              onChangeText={(text) =>
                setStep2Data({ ...step2Data, phoneNumber: text })
              }
            />
          </View>
        </ProgressStep>

        <ProgressStep label="Step 3">
          <View style={styles.stepContent}>
            <Text>Business Hours</Text>
            <TextInput
              style={styles.input}
              placeholder="Sunday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Monday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Tuesday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Wednesday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Thursday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Friday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Saturday Hours"
              value={step3Data.Monday}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, Monday: text })
              }
            />
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={styles.stepContent}>
            <Text>Social Media</Text>
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={styles.stepContent}>
            <Text>Now, Let's add the details</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Step 4">
          <View style={styles.stepContent}>
            <Text>Location</Text>
            <Text>
              Pin location while at establishment. This will be shown to users
            </Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Step 5">
          <View style={styles.stepContent}>
            <Text>Payment</Text>
            <Text>What form of payments do you accept?</Text>
            <CheckBox
              options={[
                { label: "Cash", value: "Cash" },
                { label: "Credit", value: "Credit / Debit Card" },
                { label: "FirstPay", value: "1st Pay" },
                { label: "CIBC", value: "CIBC Transfer" },
              ]}
              value={payment}
              onChange={setPayment}
            />
          </View>
        </ProgressStep>
        <ProgressStep label="Step 6">
          <View style={styles.stepContent}>
            <Text>Ordering</Text>
            <Text>How do patrons order?</Text>
            <TextInput />
          </View>
        </ProgressStep>
        <ProgressStep label="Step 7">
          <View style={styles.stepContent}>
            <Text>Cuisine</Text>
            <CheckBox
              options={[
                { label: "Traditional Bajan", value: "Traditional Bajan" },
                { label: "Caribbean", value: "Caribbean" },
                { label: "Seafood", value: "Seafood" },
                { label: "International", value: "International" },
                { label: "Fusion", value: "Fusion" },
                { label: "Vegan/Vegetarian", value: "Vegan/Vegetarian" },
                { label: "Sweets and Treats", value: "Sweets and Treats" },
                { label: "Drinks", value: "Drinks" },
              ]}
              value={cuisine}
              onChange={setCuisine}
            />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stepContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "90%",
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default VendorSignUp;

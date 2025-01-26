import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "../../components/CheckBox";

const VendorSignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
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

  const steps = [
    {
      // label: "Step 1",
      content: (
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
      ),
    },
    {
      label: "Step 2",
      content: (
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
      ),
    },
    {
      label: "Step 3",
      content: (
        <View style={styles.stepContent}>
          <Text>Business Hours</Text>
          {Object.keys(step3Data).map((day) => (
            <TextInput
              key={day}
              style={styles.input}
              placeholder={`${day} Hours`}
              value={step3Data[day]}
              onChangeText={(text) =>
                setStep3Data({ ...step3Data, [day]: text })
              }
            />
          ))}
        </View>
      ),
    },
    {
      label: "Skipped Step",
      content: (
        <View style={styles.stepContent}>
          <Text>Now, Let's add the details</Text>
        </View>
      ),
      isSkippable: true,
    },
    {
      label: "Step 4",
      content: (
        <View style={styles.stepContent}>
          <Text>Location</Text>
          <Text>
            Pin location while at establishment. This will be shown to users.
          </Text>
        </View>
      ),
    },
    {
      label: "Step 5",
      content: (
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
      ),
    },
    {
      label: "Step 6",
      content: (
        <View style={styles.stepContent}>
          <Text>Ordering</Text>
          <Text>How do patrons order?</Text>
          <TextInput style={styles.input} />
        </View>
      ),
    },
    {
      label: "Step 7",
      content: (
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
      ),
    },
  ];

  const handleNext = () => {
    let nextStep = currentStep + 1;
    if (steps[nextStep]?.isSkippable) {
      nextStep += 1; // Skip step
    }
    if (nextStep < steps.length) {
      setCurrentStep(nextStep);
    }
  };

  const handleBack = () => {
    let previousStep = currentStep - 1;
    if (steps[previousStep]?.isSkippable) {
      previousStep -= 1; // Skip step
    }
    if (previousStep >= 0) {
      setCurrentStep(previousStep);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>{steps[currentStep].label}</Text>
        {steps[currentStep].content}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={handleBack}
          disabled={currentStep === 0}
        />
        <Button
          title={currentStep === steps.length - 1 ? "Finish" : "Next"}
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  progressLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stepContent: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default VendorSignUp;

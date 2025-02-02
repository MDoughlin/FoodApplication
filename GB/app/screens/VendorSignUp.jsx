import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { CheckBox } from "../../components/CheckBox";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
          <Text style={styles.heading}>Business Name</Text>
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
      // label: "Step 2",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.heading}>Phone Number</Text>
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
      // label: "Step 3",
      content: (
        <View>
          <Text style={styles.heading}>Business Hours</Text>
          {Object.keys(step3Data).map((day) => (
            <>
              <Text>{day}:</Text>
              <TextInput
                key={day}
                style={styles.businessInput}
                placeholder={`${day} Hours`}
                value={step3Data[day]}
                onChangeText={(text) =>
                  setStep3Data({ ...step3Data, [day]: text })
                }
              />
            </>
          ))}
        </View>
      ),
    },
    {
      // label: "Skipped Step",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.heading}>Social Media</Text>
          <Text>Instagram Handle:</Text>
          <TextInput style={styles.businessInput}>www.instagram.com/</TextInput>
          <Icon style={styles.icon} name="logo-instagram" />
          <Text>Facebook:</Text>
          <TextInput style={styles.businessInput}>www.facebook.com/</TextInput>
          <Icon name="logo-facebook" />
        </View>
      ),
    },
    {
      // label: "Skipped Step",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.details}>Now, Let's add the details</Text>
        </View>
      ),
    },
    {
      // label: "Step 4",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.heading}>Location</Text>
          <Icon name="location-outline" size={400} />
          <Text style={styles.details}>
            Pin location while at establishment. This will be shown to users.
          </Text>
        </View>
      ),
    },
    {
      // label: "Step 5",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.heading}>Payment</Text>
          <Text>What form of payments do you accept?</Text>
          <CheckBox
            options={[
              { label: "Cash", value: "Cash" },
              { label: "Credit", value: "Credit / Debit Card" },
              { label: "FirstPay", value: "1st Pay" },
              { label: "CIBC", value: "CIBC Transfer" },
            ]}
            checkedValues={payment}
            onChange={setPayment}
          />
        </View>
      ),
    },
    {
      // label: "Step 6",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.heading}>Ordering</Text>
          <Text>How do patrons order?</Text>
          <TextInput style={styles.orderInput} />
        </View>
      ),
    },
    {
      // label: "Step 7",
      content: (
        <View style={styles.stepContent}>
          <Text style={styles.heading}>Cuisine</Text>
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
            checkedValues={cuisine}
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
      <View>
        <TouchableOpacity
          style={[
            styles.backButton,
            currentStep === 0 && styles.disabledButton,
          ]}
          onPress={handleBack}
          disabled={currentStep === 0}
        >
          {/* This is the back button */}
          <MaterialIcons name="arrow-back-ios-new" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentStep === steps.length - 1 ? "DONE" : "CONTINUE"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    // padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 36.41,
    padding: 20,
  },
  // progressLabel: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  // },
  stepContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "98%",
    borderRadius: 5,
    marginVertical: 0,
    marginTop: 150,
  },
  icon: {},
  businessInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "98%",
    borderRadius: 5,
    marginVertical: 0,
    marginBottom: 25,
    marginTop: 10,
    marginLeft: 5,
  },
  orderInput: {
    borderWidth: 1,
    borderColor: "black",
    height: 100,
    padding: 10,
    width: "98%",
    borderRadius: 5,
    marginTop: 20,
  },
  details: {
    marginTop: 50,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  socialMedia: {},
  nextButton: {
    backgroundColor: "#FBBC05",
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  nextButtonText: {
    color: "#fff",
  },
  backButton: {
    left: 10,
    bottom: 680,
  },
});

export default VendorSignUp;

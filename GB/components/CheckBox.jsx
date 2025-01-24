import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function CheckBox({ options, checkedValues, onChange, style }) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        return (
          <TouchableOpacity>
            <Text>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});

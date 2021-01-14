import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Keyboard,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    // Alert.alert("Enter Value " + inputValu);
    if (!inputValue) {
      Alert.alert("Enter value before procceding ");
      setResultValue(0);
    } else {
      setResultValue(
        (parseFloat(inputValue) * currencyPerRupee[currency]).toFixed(2)
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Value"
              style={styles.inputValue}
              selectionColor="#fff"
              keyboardType="numeric"
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
              onPress={() => buttonPressed("DOLLAR")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>DOLLAR </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("EURO")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>EURO </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("POUND")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>POUND </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("RUBEL")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>RUBEL </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("AUSDOLLAR")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>AUSDOLLAR </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("CANDOLLAR")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>CANDOLLAR </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("YEN")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>YEN </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("DINAR")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>DINAR </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed("BITCOIN")}
              style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>BITCOIN </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 20,
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converterButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
  },
  inputValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  screenView: {
    flex: 1,
  },
});

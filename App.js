import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";

import PlayGameButton from "./src/components/PlayGameButton";

export default function App() {
  const [number, setNumber] = useState(1);
  const [imageUrl, setImageUrl] = useState(require("./assets/dice1.png"));

  const playButtonPressed = () => {
    const newNumber = Math.floor(Math.random() * Math.floor(5)) + 1;

    // could have used switch case
    if (newNumber === 1) {
      setImageUrl(require("./assets/dice1.png"));
    }
    if (newNumber === 2) {
      setImageUrl(require("./assets/dice2.png"));
    }
    if (newNumber === 3) {
      setImageUrl(require("./assets/dice3.png"));
    }
    if (newNumber === 4) {
      setImageUrl(require("./assets/dice4.png"));
    }
    if (newNumber === 5) {
      setImageUrl(require("./assets/dice5.png"));
    }
    if (newNumber === 6) {
      setImageUrl(require("./assets/dice6.png"));
    }
    setNumber(newNumber);
  };

  return (
    <View style={styles.container}>
      <Image source={imageUrl} />
      <PlayGameButton playButtonPressed={playButtonPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center",
  },
});

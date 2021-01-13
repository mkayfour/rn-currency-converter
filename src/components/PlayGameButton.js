import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const PlayGameButton = (props) => {
  const { playButtonPressed } = props;

  return (
    <TouchableOpacity onPress={playButtonPressed}>
      <Text style={styles.gameButton}>Play Game</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameButton: {
    marginTop: 35,
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderColor: "#FFF",
    borderRadius: 10,
  },
});

export default PlayGameButton;

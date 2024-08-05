import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Header({ onPress, ...props }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo/</Text>
      <TouchableOpacity {...props} onPress={onPress}>
        <Text style={styles.signOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: "#2C2C2C",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#f7f7f7",
    fontWeight: "medium",
  },
  signOut: {
    fontSize: 16,
    color: "#f7f7f7",
    fontWeight: "medium",
    padding: 4,
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Header({ onPress, userName, ...props }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bem-vindo/</Text>
        <Text style={styles.titleUser}>{userName}</Text>
      </View>
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
    fontWeight: "normal",
  },
  titleUser: {
    color: "#f7f7f7",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
  signOut: {
    fontSize: 16,
    color: "#f7f7f7",
    fontWeight: "medium",
    padding: 4,
  },
});

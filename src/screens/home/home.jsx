import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./style";
import Header from "../../components/header/header";
import { UserContext } from "../../contexts/auth";

export default function Home() {
  const { userLogout } = useContext(UserContext);

  const handleSignOut = () => {
    userLogout();
  };
  return (
    <>
      <Header onPress={() => handleSignOut()} />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
}

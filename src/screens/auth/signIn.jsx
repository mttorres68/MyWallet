import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextField } from "../../components/forms/textField";
import useForm from "../../hooks/userForm";
import { UserContext } from "../../contexts/auth";

export default function SignIn() {
  const { userLogin, error, loading } = useContext(UserContext);
  const email = useForm("email");
  const password = useForm("password");
  const { navigate } = useNavigation();
  const passwordRef = useRef(null);

  async function handleSubmit() {
    if (email.validate() && password.value) {
      await userLogin(email.value, password.value);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MyWallet</Text>
      <TextField
        label={"Email"}
        inputMode={"email"}
        placeholder={"Digite seu Email"}
        returnKeyType={"next"}
        onSubmitEditing={() => passwordRef.current.focus()}
        value={email.value}
        onChangeText={email.onChange}
        onBlur={email.onBlur}
      />
      <TextField
        label={"Senha"}
        placeholder={"Digite sua senha"}
        secureTextEntry
        maxLength={20}
        ref={passwordRef}
        returnKeyType={"go"}
        onSubmitEditing={() => navigate("registro")}
        showToggleIcon
        value={password.value}
        onChangeText={password.onChange}
        onBlur={password.onBlur}
      />
      {email.error && <Text style={styles.error}>{email.error}</Text>}

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.titleButton}>Acessar conta...</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#2C2C2C",
  },
  button: {
    width: "80%",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#2c2c2c",
    borderRadius: 4,
    marginTop: 8,
  },
  titleButton: {
    fontSize: 16,
    color: "#f7f7f7",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
  },
  error: {
    color: "red",
    marginVertical: 4,
  },
});

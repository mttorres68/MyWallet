import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const TextField = React.forwardRef(
  ({ label, showToggleIcon, ...inputProps }, ref) => {
    const [secureText, setSecureText] = useState(
      inputProps.secureText || false
    );

    const toggleSecureText = () => {
      setSecureText(!secureText);
    };

    return (
      <View style={style.container}>
        <Text style={style.label}>{label}</Text>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            {...inputProps}
            ref={ref}
            secureTextEntry={secureText}
          />
          {showToggleIcon && (
            <TouchableOpacity
              onPress={toggleSecureText}
              style={style.iconContainer}
            >
              <MaterialCommunityIcons
                name={secureText ? "eye-off" : "eye"}
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

const style = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: "80%",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
  },
  iconContainer: {
    padding: 8,
    position: "absolute",
    alignSelf: "center",
    left: 270,
  },
});

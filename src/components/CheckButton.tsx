import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLORS } from "styles";

export const CheckButton = ({ checked }: { checked?: boolean }) => {
  return (
    <TouchableOpacity style={checked ? styles.checked : styles.container}>
      {checked ? <Icon name="check" color={COLORS.white} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  checked: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
  },
});

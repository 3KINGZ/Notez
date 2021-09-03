import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLORS } from "styles";

interface IIconButton {
  name: string;
  onPress: () => void;
}

export const IconButton = ({ name, onPress }: IIconButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={name} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGrey,
  },
});

import React from "react";
import { TouchableOpacity, StyleSheet, StyleProp } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLORS, SIZES } from "styles";

interface IIconButton {
  name: string;
  onPress: () => void;
  style?: StyleProp;
}

export const IconButton = ({ name, onPress, style }: IIconButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Icon name={name} color={COLORS.white} size={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: COLORS.lightGrey,
  },
});

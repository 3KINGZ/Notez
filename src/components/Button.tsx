import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  Text,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLORS, FONTS, SIZES } from "styles";

interface IIconButton {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const Button = ({ title, onPress, style, disabled }: IIconButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style]}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGrey,
  },
  label: {
    fontSize: SIZES.m,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.white,
  },
});

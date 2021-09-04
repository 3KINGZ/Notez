import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import { COLORS, FONTS, SIZES } from "styles";

interface ITextButton {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const TextButton = ({
  label,
  onPress,
  disabled,
  style,
}: ITextButton) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text
        style={[
          disabled ? styles.disabledTextButton : styles.textButton,
          style,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoBold,
    fontSize: SIZES.l,
    textTransform: "capitalize",
  },
  disabledTextButton: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoBold,
    fontSize: SIZES.l,
    opacity: 0.4,
    textTransform: "capitalize",
  },
});

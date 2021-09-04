import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { COLORS } from "styles";

interface IColorButton {
  color: string;
  selectedColor?: string;
  onSelect: any;
}

export const ColorButton = ({
  color,
  selectedColor,
  onSelect,
}: IColorButton) => {
  return (
    <TouchableOpacity onPress={() => onSelect(color)}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            zIndex: 0,
            elevation: 0,
          },
        ]}
      />
      {selectedColor === color ? (
        <View
          style={[
            styles.container,
            {
              backgroundColor: COLORS.transparentGrey,
              zIndex: 1,
              elevation: 1,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.4,
            },
          ]}>
          <Icon name="check" size={20} color={COLORS.black} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
  },
});

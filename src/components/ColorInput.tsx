import React from "react";
import { View, FlatList } from "react-native";

import { colorList } from "constants";
import { ColorButton } from "./ColorButton";

interface IColorInput {
  onSelectColor: (color: string) => void;
  selectedColor: string;
}

export const ColorInput = ({ onSelectColor, selectedColor }: IColorInput) => {
  const renderItem = ({ item }: any) => (
    <ColorButton
      color={item.color}
      onSelect={onSelectColor}
      selectedColor={selectedColor}
    />
  );

  return (
    <View style={{ marginVertical: 10 }}>
      <FlatList
        data={colorList}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

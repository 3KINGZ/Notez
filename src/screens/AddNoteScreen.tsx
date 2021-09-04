import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { colorList } from "constants";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "styles";
import { ColorInput } from "components";
import { ColorButton } from "components/ColorButton";

export const AddNoteScreen = () => {
  const randomColorIndex: number = Math.floor(Math.random() * colorList.length);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [color, setColor] = useState(colorList[randomColorIndex].color);

  console.log(color);

  return (
    <View style={styles.container}>
      <ColorInput
        onSelectColor={color => setColor(color)}
        selectedColor={color}
      />

      <TextInput
        onChangeText={setTitle}
        style={styles.titleInput}
        placeholder="Title"
        placeholderTextColor={COLORS.lightGrey2}
        multiline
      />

      <TextInput
        onChangeText={setTitle}
        style={styles.bodyInput}
        placeholder="Type something..."
        placeholderTextColor={COLORS.lightGrey2}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 10,
  },
  titleInput: {
    // borderWidth: 1,
    // borderColor: COLORS.lightGrey,
    fontSize: SIZES.xl,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMedium,
  },
  bodyInput: {
    fontSize: SIZES.l,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMedium,
  },
});

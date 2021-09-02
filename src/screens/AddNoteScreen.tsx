import React, { useState } from "react";
import { View, Text } from "react-native";

import { colorList } from "constants";

export const AddNoteScreen = () => {
  const randomColorIndex: number = Math.floor(Math.random() * colorList.length);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [color, setColor] = useState<string>(colorList[randomColorIndex]);

  return (
    <View>
      <Text>AddNoteScreen</Text>
    </View>
  );
};

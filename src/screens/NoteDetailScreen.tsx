import React from "react";
import { View, Text } from "react-native";

export const NoteDetailScreen = ({ routes }: any) => {
  const { id } = routes.params;

  return (
    <View>
      <Text>Note Detail</Text>
      <Text>{id}</Text>
    </View>
  );
};

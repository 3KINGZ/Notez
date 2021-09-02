import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { formatDate } from "helpers";
import { routes } from "navigation/route";

export const Note = ({ note }: { note: INote }) => {
  const navigation = useNavigation();

  const { id, title, color, dateCreated } = note;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.NOTE_DETAIL, { id })}
      style={[styles.container, { backgroundColor: color }]}>
      <Text>{title}</Text>
      <Text>{formatDate(dateCreated)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get("window").width / 2,
  },
});

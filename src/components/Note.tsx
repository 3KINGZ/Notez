import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { formatDate } from "helpers";
import { routes } from "navigation/route";
import { COLORS, FONTS, SIZES } from "styles";

export const Note = ({ note }: { note: INote }) => {
  const navigation = useNavigation();

  const { id, title, color, dateCreated } = note;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.NOTE_DETAIL, { id })}
      style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{formatDate(dateCreated)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    width: Dimensions.get("window").width / 2 - 20,
    margin: 10,
    minHeight: 50,
  },
  title: {
    fontFamily: FONTS.RobotoRegular,
    fontSize: 24,
    color: COLORS.blackTextColor,
  },
  date: {
    fontFamily: FONTS.RobotoMedium,
    fontSize: SIZES.s,
    color: COLORS.blackTextColor,
    opacity: 0.4,
    alignSelf: "baseline",
  },
});

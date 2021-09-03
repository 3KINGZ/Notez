/* eslint-disable react/display-name */
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { IconButton } from "components";
import { formatDate } from "helpers";
import { routes } from "navigation/route";
import { COLORS, FONTS, SIZES } from "styles";

export const NoteDetailScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const { notes } = useSelector((state: any) => state.note);

  const note = notes.find((note: INote) => note.id === id);

  const { id: noteId, title, body, dateCreated } = note;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="edit"
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate(routes.EDIT_NOTE, { id })}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{formatDate(dateCreated)}</Text>
        <Text style={styles.body}>{body}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 10,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.xxl,
    fontFamily: FONTS.RobotoMedium,
  },
  date: {
    color: COLORS.white,
    fontSize: SIZES.l,
    fontFamily: FONTS.RobotoRegular,
    marginTop: 15,
    opacity: 0.8,
  },
  body: {
    color: COLORS.white,
    fontSize: SIZES.l,
    fontFamily: FONTS.RobotoRegular,
    marginTop: 15,
    lineHeight: 30,
  },
});

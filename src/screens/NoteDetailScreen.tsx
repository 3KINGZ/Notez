/* eslint-disable react/display-name */
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "components";
import { formatDate } from "helpers";
import { routes } from "navigation/route";
import { COLORS, FONTS, SIZES } from "styles";
import { deleteNote } from "actions/note.action";

export const NoteDetailScreen = ({ route, navigation }: any) => {
  const dispatch = useDispatch();

  const { id } = route.params;
  console.log("ntdtid", id);
  const { notes } = useSelector((state: any) => state.note);

  console.log("all notes", notes);

  const note = notes.find((note: INote) => note?.id === id);
  console.log("ntdt", note);

  // const { title, body, dateCreated } = note;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <IconButton
            style={{ marginLeft: 10 }}
            name="edit"
            onPress={() => navigation.navigate(routes.ADD_NOTE, { id })}
          />
          <IconButton
            style={{ marginLeft: 10 }}
            name="trash-2"
            onPress={_deleteNote}
          />
        </View>
      ),
    });
  }, [navigation]);

  const _deleteNote = () => {
    navigation.navigate(routes.HOMESCREEN);

    dispatch(deleteNote(id));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{note?.title}</Text>
        <Text style={styles.date}>{formatDate(note?.dateCreated)}</Text>
        <Text style={styles.body}>{note?.body}</Text>
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

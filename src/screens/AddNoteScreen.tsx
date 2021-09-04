/* eslint-disable react/display-name */
import React, { useState, useLayoutEffect } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";

import { colorList } from "constants";
import { COLORS, FONTS, SIZES } from "styles";
import { Button, ColorInput } from "components";
import { addNote, editNote } from "actions/note.action";
import { routes } from "navigation/route";

export const AddNoteScreen = ({ navigation, route }: any) => {
  const dispatch = useDispatch();
  const id = route?.params?.id;

  const { notes } = useSelector((state: any) => state.note);

  const note = notes.find((note: INote) => note.id === id);

  const randomColorIndex: number = Math.floor(Math.random() * colorList.length);

  const [title, setTitle] = useState<string>(note?.title ?? "");
  const [body, setBody] = useState<string>(note?.body ?? "");
  const [color, setColor] = useState<string>(
    note?.color ?? colorList[randomColorIndex].color,
  );

  console.log("stateValues", title, body, color);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Save" disabled={!title} onPress={saveNote} />
      ),
    });
  }, [title, body]);

  const saveNote = () => {
    const newNote = {
      id: uuid.v4(),
      title: title,
      body: body,
      color: color,
      dateCreated: Date.now(),
    };

    if (id) {
      dispatch(editNote(id, newNote));
      navigation.navigate(routes.NOTE_DETAIL, { id: newNote.id });
      return;
    }

    dispatch(addNote(newNote));
    navigation.navigate(routes.HOMESCREEN);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ColorInput onSelectColor={setColor} selectedColor={color} />

        <TextInput
          onChangeText={setTitle}
          // value={title}
          defaultValue={title}
          style={styles.titleInput}
          placeholder="Title"
          placeholderTextColor={COLORS.lightGrey2}
          multiline
        />

        <TextInput
          onChangeText={setBody}
          // value={body}
          defaultValue={body}
          style={styles.bodyInput}
          placeholder="Type something..."
          placeholderTextColor={COLORS.lightGrey2}
          multiline
        />
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
  titleInput: {
    fontSize: SIZES.xl,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMedium,
  },
  bodyInput: {
    fontSize: SIZES.l,
    color: COLORS.white,
    fontFamily: FONTS.RobotoMedium,
    lineHeight: 30,
  },
});

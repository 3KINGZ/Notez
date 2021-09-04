/* eslint-disable react/display-name */
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Feather";

import { IconButton, Notes, SearchBar, TextButton } from "components";
import { COLORS, FONTS, SIZES } from "styles";
import { routes } from "navigation/route";
import { deleteNotes, toggleDelete } from "actions/note.action";

export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { deleteMode, notes, notesToDelete } = useSelector(
    (state: any) => state.note,
  );

  const [notes2, setNotes2] = useState(notes);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const closeSearch = () => {
    setSearch("");
    setShowSearch(false);
  };

  const _toggleDelete = () => {
    dispatch(toggleDelete());
  };

  const _deleteNotes = () => {
    dispatch(deleteNotes());
    _toggleDelete();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerMode: "screen",

      header: ({ navigation, route, options, back }: any) =>
        showSearch ? (
          <View style={options.headerStyle}>
            <SearchBar onExit={closeSearch} onChangeText={setSearch} />
          </View>
        ) : (
          <View style={[styles.titleContainer, options.headerStyle]}>
            <View>
              <Text style={styles.title}>Notes</Text>
            </View>

            <View style={styles.headerButtonContainer}>
              <IconButton
                name="trash-2"
                style={{ marginRight: 10 }}
                onPress={_toggleDelete}
              />

              <IconButton
                name="search"
                style={{ marginRight: 10 }}
                onPress={() => setShowSearch(true)}
              />
            </View>
          </View>
        ),
    });
  }, [navigation, showSearch]);

  useEffect(() => {
    const searchKeyWord = search.toLowerCase();
    setNotes2(
      notes.filter(
        (note: INote) =>
          note.title.toLowerCase().includes(searchKeyWord) ||
          note.body.toLowerCase().includes(searchKeyWord),
      ),
    );
  }, [search, notes]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Notes notes={notes2} />
      </View>

      {!deleteMode ? (
        <TouchableOpacity
          style={styles.addNoteButton}
          onPress={() => navigation.navigate(routes.ADD_NOTE)}>
          <Icon name="plus" color="white" size={SIZES.xl} />
        </TouchableOpacity>
      ) : null}

      {deleteMode ? (
        <View style={styles.textButtonContainer}>
          <View style={styles.mainTextButtonContainer}>
            <TextButton
              label="cancel"
              style={styles.customTextButton}
              onPress={_toggleDelete}
            />
            <TextButton
              label="delete"
              style={styles.customTextButton}
              disabled={!notesToDelete.length}
              onPress={_deleteNotes}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.xxl,
    paddingLeft: 10,
    fontFamily: FONTS.RobotoMedium,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  addNoteButton: {
    position: "absolute",
    bottom: 35,
    backgroundColor: COLORS.black,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    right: 15,

    // shadowColor: COLORS.lightGrey,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  headerButtonContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  textButtonContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,

    width: "100%",
    marginVertical: 10,
  },
  mainTextButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  customTextButton: {
    marginLeft: 10,
  },
});

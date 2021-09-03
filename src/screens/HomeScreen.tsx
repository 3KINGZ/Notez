/* eslint-disable react/display-name */
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";

import { IconButton, Notes, SearchBar } from "components";
import { COLORS, FONTS, SIZES } from "styles";
import { routes } from "navigation/route";

export const HomeScreen = ({ navigation }: any) => {
  const { notes } = useSelector((state: State) => state.note);

  const [notes2, setNotes2] = useState(notes);

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const closeSearch = () => {
    setSearch("");
    setShowSearch(false);
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
            <IconButton
              name="search"
              style={{ marginRight: 10 }}
              onPress={() => setShowSearch(true)}
            />
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
  }, [search]);

  return (
    <View style={styles.container}>
      <Notes notes={notes2} />

      <TouchableOpacity
        style={styles.addNoteButton}
        onPress={() => navigation.navigate(routes.ADD_NOTE)}>
        <Icon name="plus" color="white" size={SIZES.xl} />
      </TouchableOpacity>
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
  },
});

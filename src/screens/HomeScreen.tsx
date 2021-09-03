/* eslint-disable react/display-name */
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { IconButton, Notes, SearchBar } from "components";
import { COLORS, FONTS, SIZES } from "styles";

export const HomeScreen = ({ navigation }: any) => {
  const { notes } = useSelector((state: State) => state.note);

  const [notes2, setNotes2] = useState(notes);

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerMode: "screen",

      header: ({ navigation, route, options, back }: any) =>
        showSearch ? (
          <View style={options.headerStyle}>
            <SearchBar
              onExit={() => setShowSearch(false)}
              onChangeText={setSearch}
            />
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
    setNotes2(
      notes2.filter(
        (note: INote) =>
          note.title.includes(search) || note.body.includes(search),
      ),
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>HomeScreen</Text>
      <Notes notes={notes2} />
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
    fontFamily: FONTS.RobotoBold,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

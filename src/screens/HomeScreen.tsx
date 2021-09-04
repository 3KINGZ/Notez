/* eslint-disable react/display-name */
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Feather";

import {
  CheckButton,
  IconButton,
  Notes,
  SearchBar,
  TextButton,
} from "components";
import { COLORS, FONTS, SIZES } from "styles";
import { routes } from "navigation/route";
import {
  deleteNotes,
  selectAllNotes,
  toggleDelete,
  unSelectAllNotes,
} from "actions/note.action";

export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { deleteMode, notes, notesToDelete } = useSelector(
    (state: any) => state.note,
  );

  const [notes2, setNotes2] = useState(notes);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);

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

  const toggleSelectAll = () => {
    if (!selectAll) {
      dispatch(selectAllNotes());
    } else {
      dispatch(unSelectAllNotes());
    }
    setSelectAll(!selectAll);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerMode: "screen",

      header: ({ navigation, route, options, back }: any) =>
        showSearch ? (
          <View style={options.headerStyle}>
            <SearchBar onExit={closeSearch} onChangeText={setSearch} />
          </View>
        ) : deleteMode ? (
          <View style={[options.headerStyle, styles.deleteModeHeaderContainer]}>
            <TouchableWithoutFeedback onPress={toggleSelectAll}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckButton checked={selectAll} />
                <TextButton
                  label="Select All"
                  style={{ marginLeft: 5 }}
                  onPress={toggleSelectAll}
                />
              </View>
            </TouchableWithoutFeedback>

            <Text style={styles.notesToDeleteLengthText}>
              {notesToDelete.length} selected
            </Text>
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
  }, [navigation, showSearch, deleteMode, notesToDelete, selectAll]);

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

      {!deleteMode && !showSearch ? (
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
  deleteModeHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  notesToDeleteLengthText: {
    color: COLORS.white,
    fontFamily: FONTS.RobotoMedium,
    fontSize: SIZES.m,
  },
});

import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { formatDate } from "helpers";
import { routes } from "navigation/route";
import { COLORS, FONTS, SIZES } from "styles";
import { CheckButton } from "components";
import { setNoteToDelete } from "actions/note.action";

export const Note = ({ note }: { note: INote }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { deleteMode, notesToDelete } = useSelector((state: any) => state.note);

  const { id, title, color, dateCreated } = note;

  const onPress = () => {
    if (deleteMode) {
      dispatch(setNoteToDelete(id));
    } else {
      navigation.navigate(routes.NOTE_DETAIL, { id });
    }
  };

  const checked = notesToDelete.includes(id);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {deleteMode ? <CheckButton checked={checked} /> : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{formatDate(dateCreated)}</Text>
      </View>
    </TouchableWithoutFeedback>
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

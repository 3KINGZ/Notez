import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { IconButton } from "components";
import { COLORS } from "styles";

export const SearchBar = ({ onExit }: any) => {
  return (
    <View style={styles.container}>
      <IconButton
        name="chevron-left"
        style={{ marginLeft: 10 }}
        onPress={onExit}
      />
      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={COLORS.lightGrey}
        style={{
          borderWidth: 1,
          borderColor: COLORS.lightGrey,
          flex: 1,
          //   width: "90%",
          marginLeft: 5,
          borderRadius: 10,
          padding: 5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    // flex: 1,
    marginRight: 10,
    backgroundColor: "red",
  },
});

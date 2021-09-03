import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { IconButton } from "components";
import { COLORS } from "styles";

interface ISearchBar {
  onExit: () => void;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({ onExit, onChangeText }: ISearchBar) => {
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
        onChangeText={onChangeText}
        style={{
          borderWidth: 1,
          borderColor: COLORS.lightGrey,
          flex: 1,
          marginLeft: 5,
          borderRadius: 10,
          padding: 5,
          color: COLORS.white,
          paddingLeft: 12,
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
    marginRight: 10,
  },
});

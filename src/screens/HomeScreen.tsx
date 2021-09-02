import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Notes } from "components";
import { COLORS } from "styles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Notes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

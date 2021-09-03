/* eslint-disable react/display-name */
import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Notes } from "components";
import { COLORS, FONTS, SIZES } from "styles";

//feather - search,edit,plus,chevron

export const HomeScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.xl,
            paddingLeft: 10,
            fontFamily: FONTS.RobotoBold,
          }}>
          Notes
        </Text>
      ),
    });
  }, [navigation]);

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

/* eslint-disable react/display-name */
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { IconButton, Notes, SearchBar } from "components";
import { COLORS, FONTS, SIZES } from "styles";

//feather - search,edit,plus,chevron

export const HomeScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerMode: "screen",

      // headerLeft: () => (
      //   <Text
      //     style={{
      //       color: COLORS.white,
      //       fontSize: SIZES.xxl,
      //       paddingLeft: 10,
      //       fontFamily: FONTS.RobotoBold,
      //     }}>
      //     Notes
      //   </Text>
      //   // <SearchBar />
      // ),
      // headerRight: () => (
      //   <IconButton name="search" style={{ marginRight: 10 }} />
      // ),
      header: () => <SearchBar />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <SearchBar /> */}
      <Text style={{ color: "red" }}>HomeScreen</Text>
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

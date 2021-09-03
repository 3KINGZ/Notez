import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import RootStackNavigator from "navigation/RootStackNavigator";
import { storeObjectValue } from "utils/storage";
import { COLORS } from "styles";

const App = () => {
  const { notes } = useSelector((state: any) => state.note);

  useEffect(() => {
    const saveNote = async () => {
      await storeObjectValue("notes", notes);
    };

    saveNote();
  }, [notes]);

  return (
    <>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

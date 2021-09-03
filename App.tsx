import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";

import RootStackNavigator from "navigation/RootStackNavigator";
import { storeObjectValue } from "utils/storage";
import store from "store";

const App = () => {
  const { notes } = useSelector((state: any) => state.note);

  useEffect(() => {
    const saveNote = async () => {
      await storeObjectValue("notes", notes);
    };

    saveNote();
  }, [notes]);

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;

import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import RootStackNavigator from "navigation/RootStackNavigator";
import { storeObjectValue } from "utils/storage";

const App = () => {
  const { notes } = useSelector((state: any) => state.note);

  useEffect(() => {
    async () => await storeObjectValue("notes", notes);
  }, [notes]);

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;

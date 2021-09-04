import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import RootStackNavigator from "navigation/RootStackNavigator";
import { storeObjectValue } from "utils/storage";
import { COLORS } from "styles";
import { syncNotes } from "actions/note.action";

const App = () => {
  const dispatch = useDispatch();

  const { notes, loading } = useSelector((state: any) => state.note);

  // useEffect(() => {
  //   const saveNote = async () => {
  //     console.log("saving notes");
  //     console.log("snts", notes);
  //     await storeObjectValue("notes", notes);
  //   };

  //   saveNote();
  // }, [notes]);

  // useEffect(() => {
  //   dispatch(syncNotes());
  // }, []);

  return (
    <>
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </>
      )}
    </>
  );
};

export default App;

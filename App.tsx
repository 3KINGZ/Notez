import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import RootStackNavigator from "navigation/RootStackNavigator";
import { storeObjectValue, getObjectValue } from "utils/storage";
import { COLORS } from "styles";
import { syncNotes } from "actions/note.action";

const App = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { notes } = useSelector((state: any) => state.note);

  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      try {
        const notesCache = await getObjectValue("notes");
        dispatch(syncNotes(notesCache));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getNotes();
  }, []);

  useEffect(() => {
    const saveNote = () => {
      if (!loading) {
        storeObjectValue("notes", notes);
      }
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

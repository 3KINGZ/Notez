import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AddNoteScreen,
  EditNoteScreen,
  HomeScreen,
  NoteDetailScreen,
} from "screens";
import { routes } from "./route";
import { COLORS } from "styles";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        headerStyle: {
          backgroundColor: COLORS.black,
        },
      }}>
      <Stack.Screen name={routes.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={routes.NOTE_DETAIL} component={NoteDetailScreen} />
      <Stack.Screen name={routes.ADD_NOTE} component={AddNoteScreen} />
      <Stack.Screen name={routes.EDIT_NOTE} component={EditNoteScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

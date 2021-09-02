import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AddNoteScreen,
  EditNoteScreen,
  HomeScreen,
  NoteDetailScreen,
} from "screens";
import { routes } from "./route";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={routes.NOTE_DETAIL} component={NoteDetailScreen} />
      <Stack.Screen name={routes.ADD_NOTE} component={AddNoteScreen} />
      <Stack.Screen name={routes.EDIT_NOTE} component={EditNoteScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

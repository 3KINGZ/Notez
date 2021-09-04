/* eslint-disable react/display-name */
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
import { IconButton } from "components";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          backgroundColor: COLORS.black,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Stack.Screen name={routes.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen
        name={routes.NOTE_DETAIL}
        component={NoteDetailScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <IconButton
              name="chevron-left"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name={routes.ADD_NOTE}
        component={AddNoteScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <IconButton
              name="chevron-left"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen name={routes.EDIT_NOTE} component={EditNoteScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

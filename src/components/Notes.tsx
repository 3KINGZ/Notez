import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Note } from "./Note";

const renderItem = ({ item }: { item: INote }) => <Note note={item} />;
const keyExtractor = (item: INote) => item.id;

export const Notes = () => {
  const { notes } = useSelector((state: State) => state.note);

  return (
    <View>
      <Text>Notes</Text>

      <FlatList
        data={notes}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

import React from "react";
import { View, Text } from "react-native";
import { Note } from "./Note";
import MasonryList from "@react-native-seoul/masonry-list";

const renderItem = ({ item }: { item: INote }) => <Note note={item} />;
const keyExtractor = (item: INote) => item.id;

export const Notes = ({ notes }: { notes: INote[] }) => {
  return (
    <View>
      <MasonryList
        data={notes}
        numColumns={2}
        renderItem={renderItem}
        // keyExtractor={keyExtractor}
      />
    </View>
  );
};

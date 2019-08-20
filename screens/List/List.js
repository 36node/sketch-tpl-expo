import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Pets from '../../components/Pets/Pets.c';

export default function List() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Pets/>
    </ScrollView>
  );
}

List.navigationOptions = {
  title: 'List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

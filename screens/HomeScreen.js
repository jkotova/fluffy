import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AnimalsList from '../components/animalsList/animalsList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AnimalsList />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

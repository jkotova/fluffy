import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimalsList from '../components/animalsList/animalsList';
import { Layout } from 'react-native-ui-kitten';

export default function HomeScreen() {
  return (
    <Layout>
      <AnimalsList />
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
});

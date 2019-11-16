import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
} from 'react-native-ui-kitten';

export default function MyReportsScreen() {
  return (
    <Layout style={styles.container}>
      <Text>Мои репорты</Text>
    </Layout>
  );
}

MyReportsScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

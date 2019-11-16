import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
} from 'react-native-ui-kitten';

export default function FundsScreen() {
  return (
    <Layout style={styles.container}>
      <Text>Список организаций</Text>
    </Layout>
  );
}

FundsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


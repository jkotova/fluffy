import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
} from 'react-native-ui-kitten';

export default function AddReportScreen() {
  return (
    <Layout style={styles.container}>
      <Text>Добавить репорт</Text>
    </Layout>
  );
}

AddReportScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

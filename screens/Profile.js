import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
} from 'react-native-ui-kitten';

export default function ProfileScreen() {
  return (
    <Layout style={styles.container}>
      <Text>Профиль</Text>
    </Layout>
  );
}

ProfileScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

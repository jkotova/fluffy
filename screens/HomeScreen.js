import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReportsList from '../components/ReportsList/ReportsList';
import {Layout} from 'react-native-ui-kitten';

import HomeTopNavigation from '../components/HomeTopNavigation/HomeTopNavigation';
import { gaps, layout } from '../ui/variables';



export default function HomeScreen() {
  return (
    <Layout style={layout.container}>
      <HomeTopNavigation />
      <ReportsList />
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({

});

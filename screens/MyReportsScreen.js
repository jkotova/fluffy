import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text} from 'react-native-ui-kitten';
import ReportsList from '../components/ReportsList/ReportsList';
import HomeTopNavigation from '../components/HomeTopNavigation/HomeTopNavigation';
import { gaps, layout } from '../ui/variables';


export default function MyReportsScreen(props) {
  return (
    <Layout style={layout.container}>
      <HomeTopNavigation  
        title='My reports' 
        description='Check your reports statuses'
        navigation={props.navigation} />
      <ReportsList my={true} />
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

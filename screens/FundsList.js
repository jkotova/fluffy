import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout } from 'react-native-ui-kitten';
import FundsList from '../components/FundsList/FundsList';
import HomeTopNavigation from '../components/HomeTopNavigation/HomeTopNavigation';
import { gaps, layout } from '../ui/variables';

export default function FundsScreen(props) {
  return (
    <Layout style={layout.container}>
      <HomeTopNavigation 
        title='Funds list' 
        description='Here you can find list of funds' 
        navigation={props.navigation} 
      />
      <FundsList navigation={props.navigation} />
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


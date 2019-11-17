import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FundsListScreen from '../screens/FundsList';
import AddReportScreen from '../screens/AddReportScreen';
import MyReportsScreen from '../screens/MyReportsScreen';
import ProfileScreen from '../screens/Profile';
import ActiveFundScreen from '../screens/ActiveFundScreen';
import { colors } from '../ui/variables';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Reports List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='list'
    />
  ),
};

HomeStack.path = '';






const FundsStack = createStackNavigator(
  {
    Funds: FundsListScreen,
    ActiveFund: ActiveFundScreen,
  },
  config
);

FundsStack.navigationOptions = {
  tabBarLabel: 'Funds list',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='globe' />
  ),
};

FundsStack.path = '';

const AddReportStack = createStackNavigator(
  {
    AddReport: AddReportScreen,
  },
  config
);

AddReportStack.navigationOptions = {
  tabBarLabel: 'Add Report',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='plus-circle' />
  ),
};

AddReportStack.path = '';


const MyReportsStack = createStackNavigator(
  {
   MyReports: MyReportsScreen,
  },
  config
);

MyReportsStack.navigationOptions = {
  tabBarLabel: 'My reports',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='heart' />
  ),
};

MyReportsStack.path = '';


const ProfileStack = createStackNavigator(
  {
   Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='person' />
  ),
};

ProfileStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FundsStack,
  AddReportStack,
  MyReportsStack,
  ProfileStack,
},
{
  tabBarOptions: {
    activeTintColor: colors.primary,
    labelStyle: {
      fontSize: 12,
    },
  }
});

tabNavigator.path = '';

export default tabNavigator;

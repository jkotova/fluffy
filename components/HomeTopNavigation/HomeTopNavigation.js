import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from 'react-native-ui-kitten';

const OptionsIcon = (style) => (
  <Icon {...style} name='options-2'/>
);

const OptionsAction = (props) => (
  <TopNavigationAction {...props} icon={OptionsIcon}/>
);

export default function HomeScreen() {

  const renderRightControls = () => [
    <OptionsAction/>,
  ];

  return (
      <TopNavigation
        title='Reports list'
        subtitle='Here you can see all reports that was made by our users'
        rightControls={renderRightControls()}
      />
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
});

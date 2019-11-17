import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from 'react-native-ui-kitten';



export default function HomeScreen(props) {
  const backHandler = ()=>{
    console.log(1)
  }
  const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' />
  );
  
  const BackAction = () => (
    <TopNavigationAction 
      icon={BackIcon}
      onPress={()=>props.navigation.goBack()}
    />
   
  );

  return (
      <TopNavigation
        leftControl={(props.back) ? BackAction() : null}
        title={props.title}
        subtitle={props.description}
      />
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
});

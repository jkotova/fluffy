import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Icon} from 'react-native-ui-kitten';

import {colors} from '../ui/variables';

export default function TabBarIcon(props) {
  return (
    <Icon 
    width={26}
    height={26}
    fill={props.focused ? colors.primary : colors.grey}
    name={props.name}
    />
  );
}

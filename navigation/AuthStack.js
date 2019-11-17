import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import RegistrationScreen from '../screens/Registration';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Registration: RegistrationScreen
});

export default AuthStack;
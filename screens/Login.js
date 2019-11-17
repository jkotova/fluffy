import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Layout,
    Text,
    Button,
    Icon,
    Input,
    Spinner
} from 'react-native-ui-kitten';
import { apiFetch, URLS, getUrl } from '../api'
import { gaps, fonts, colors } from '../ui/variables';

const EMAIL_REGEX = /^[A-Za-z0-9\._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: {
                value: '',
                isValid: null,
            },
            password: {
                value: '',
                isValid: null,
            },
            isHiddenPassword: true,
            error: '',
            isLoading: false,
        }
    }

    getFieldStatus = (isValid) => {
        if (isValid === null) return '';
        return isValid ? 'success' : 'danger';
    }

    onChangeInput = (key, value) => {
        this.setState({
            [key]: {
                ...this.state[key],
                isValid: null,
                value: value,
            }
        });
    };

    onBlurEmail = () => {
        const { email } = this.state;
        const isValid = EMAIL_REGEX.test(email.value);
        this.setState({
            email: {
                ...email,
                isValid: isValid
            }
        });
    }

    onIconPress = () => {
        this.setState({
            password: {
                ...this.state.password,
                isHidden: !this.state.isHiddenPassword
            }
        });
    };

    renderIcon = (style) => {
        const iconName = this.state.isHiddenPassword ? 'eye-off' : 'eye';
        return (
            <Icon {...style} name={iconName} />
        );
    };

    checkFields = () => {
        const { email } = this.state;
        const isValidEmail = EMAIL_REGEX.test(email.value) && email.value.length !== 0;

        if (isValidEmail) {
            return true;
        }
        this.setState({
            email: {
                ...email,
                isValid: isValidEmail
            },
        });
        return false;
    }

    loginUser = async () => {
        if (!this.checkFields()) { return; }
        this.setState({
            isLoading: true
        })
        const email = this.state.email.value.trim().toLowerCase();
        const url = getUrl.login(email, this.state.password.value);
        const data = {
            requestUrl: URLS.login,
            method: 'POST',
            body: JSON.stringify({ email: email, password: this.state.password.value })
        }

        try {
            await apiFetch(data);
        } catch (error) {
            this.setState({
                error: 'Incorrect login or password',
                isLoading: false
            })
            return;
        }
        this.setState({
            isLoading: false
        })
        console.log('Correct login');
        this.props.navigation.navigate("Main");
    }

    navigateToRegistration = () => {
        this.props.navigation.navigate("Registration");
    }

    render() {

        const { error, isLoading, email, password, isHiddenPassword } = this.state;

        return (
            <Layout style={styles.container}>
                <Text style={styles.title} category='h3'>Login</Text>
                {!!error && (
                    <Text status='danger'>{error}</Text>
                )}
                <Input
                    style={styles.input}
                    label="Login"
                    value={email.value}
                    status={this.getFieldStatus(email.isValid)}
                    caption={email.isValid === false ? 'Please enter a valid email address' : ''}
                    onChangeText={(val) => this.onChangeInput('email', val)}
                    onBlur={this.onBlurEmail}
                    placeholder='email@address.com'
                />
                <Input
                    style={styles.input}
                    label="Password"
                    value={password.value}
                    status={this.getFieldStatus(password.isValid)}
                    caption={password.isValid === false ? 'The minimum number of characters is six' : ''}
                    onChangeText={(val) => this.onChangeInput('password', val)}
                    onBlur={this.onBlurPassword}
                    placeholder="59ihTL"
                    icon={this.renderIcon}
                    secureTextEntry={isHiddenPassword}
                    onIconPress={this.onIconPress}
                />

                {!isLoading && <Button style={styles.signup} onPress={this.loginUser}>Sing in</Button>}
                {isLoading && <Spinner size='large' />}
                <Button onPress={this.navigateToRegistration} style={styles.button} appearance='ghost'>No account yet?</Button>
            </Layout>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    title: {
        marginBottom: gaps.base4x
    },
    container: {
        paddingHorizontal: gaps.base2x,
        paddingVertical: gaps.base4x
    },

    input: {
        marginBottom: gaps.base2x
    },
    signup: {
        marginTop: gaps.base2x
    },
    button: {
        marginTop: gaps.base4x
    }
});

export default LoginScreen;
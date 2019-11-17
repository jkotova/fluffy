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
import { apiFetch, getUrl } from '../api'
import { gaps, fonts, colors } from '../ui/variables';

const EMAIL_REGEX = /^[A-Za-z0-9\._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export class RegistrationScreen extends React.Component {
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

    onBlurPassword = () => {
        const { password } = this.state;
        const isValid = password.value.length >= 6;
        this.setState({
            password: {
                ...password,
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
        const { email, password } = this.state;
        const isValidEmail = EMAIL_REGEX.test(email.value) && email.value.length !== 0;
        const isValidPassword = password.value.length >= 6 && password.value.length !== 0;

        if (isValidEmail && isValidPassword) {

            return true;
        }
        if (!isValidEmail) {

        }
        this.setState({
            email: {
                value: email.value,
                isValid: isValidEmail
            },
            password: {
                value: password.value,
                isValid: isValidPassword
            }
        });
        return false;
    }

    registerUser = async () => {
        if (!this.checkFields()) { return; }
        this.setState({
            isLoading: true
        })
        const email = this.state.email.value.trim().toLowerCase();
        const url = getUrl.register(email, this.state.password.value);
        const data = {
            requestUrl: url,
            method: 'POST',
        }

        let error = '';

        try {
            await apiFetch(data);
        } catch (error) {
            this.setState({
                error: 'A user with this name already exists. Please choose another',
                email: {
                    ...this.state.email,
                    isValid: false
                },
                isLoading: false
            })
            return;
        }
        this.setState({
            isLoading: false
        })
        this.props.navigation.navigate("Login");
    }

    navigateToLogin = () => {
        this.props.navigation.navigate("Login");
    }

    render() {

        const { error, isLoading, email, password, isHiddenPassword } = this.state;

        return (
            <Layout style={styles.container}>
                <Text style={styles.title} category='h3'>Registration</Text>
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

                {!isLoading && <Button style={styles.signup} onPress={this.registerUser}>Sing up</Button>}
                {isLoading && <Spinner size='large' />}
                <Button onPress={this.navigateToLogin} style={styles.button} appearance='ghost'>Already have account?</Button>
            </Layout>
        );
    }
}

RegistrationScreen.navigationOptions = {
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

export default RegistrationScreen;
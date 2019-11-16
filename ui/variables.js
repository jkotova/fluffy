import { Dimensions, StyleSheet, Platform } from 'react-native';

export const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export const colors = {
    primary: '#FF2D55',
    secondary: '#0066FF',
    grey: '#C2C8CD',

};

export const fonts = {
        h1: 42,
        h2: 24,
        h3: 20,
        body: 16,
        small: 14,
        xsmall: 12,
        xxsmall: 10,
    lineHeightHeading: 1.1,
    lineHeight: 1.2
};

export const gaps = {
    min: 4,
    base: 8,
    base2x: 16,
    base3x: 24,
    base4x: 32,
    base5x: 40,
    base6x: 48,
    base7x: 56,
}
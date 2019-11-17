import { Dimensions, StyleSheet, Platform } from 'react-native';

export const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export const colors = {
    primary: '#eb4d4b',
    secondary: '#4834d4',
    grey: '#95afc0',
    lightGrey: '#eef4fb',
    black: '#333333',
    green: '#6ab04c',
    yellow: '#f9ca24',
    red: '#eb4d4b',
    info: '#22a6b3'

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

export const layout = StyleSheet.create({
    container: {
      paddingVertical: gaps.base2x,
      backgroundColor: '#eef4fb'
    },
    hashtags: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    hashtag: {
        borderRadius: gaps.min,
        backgroundColor: colors.info+'30',
        paddingVertical: gaps.min,
        paddingHorizontal: gaps.base,
        marginBottom: gaps.min,
        marginRight: gaps.min,
    },
    hashtagText: {
        color: colors.info,
        fontSize: fonts.small
    },
  });

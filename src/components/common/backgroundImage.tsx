import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { theme } from '../../utils/theme/theme';

function BackgroundImage({ uri, children }: { uri: any, children: any }) {
    return (
        <ImageBackground source={uri} style={styles.ImageBackground}>
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: theme.screen.windowWidth,
        alignItems: "center",
    },

});


export default BackgroundImage
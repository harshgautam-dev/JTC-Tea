import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'
function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.WhiteText: styles.darkText}>Hello World</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: 'flex-center',
        justifyContent: 'center'
    },
    WhiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal={true}styles={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>To</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>More</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>😝</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    },
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100
    },
})
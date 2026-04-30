import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Image } from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending places</Text>

        <View style={[styles.card, styles.cardElevated]}>
          <Image 
            source={{ uri: 'https://api.jtcchai.com/api/images/B.png' }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Blending Variant</Text>
            <Text style={styles.cardLabel}>Blending Variant</Text>
            <Text style={styles.cardDescription}>
              {/* add your description here */}
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headingText: {},
    cardImage: {
        height: 180
    }
})
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CustomHeader() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
      {/* Logo */}
      <Image 
        source={{ uri: 'https://jtcchai.com/JTC/logo_a.png'}} 
        style={styles.logo}
      />

      {/* Nav Items */}
      <View style={styles.nav}>
        <TouchableOpacity>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
      </View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5E6D3', // light brown 🎯
    paddingTop: 10,
    paddingBottom: 4,
    alignItems: 'center',
    elevation: 4
  },

  logo: {
    width: 50,
    height: 50,
    marginBottom: 4,
    resizeMode: 'contain'
  },

  nav: {
    flexDirection: 'row',
    gap: 30
  },

  link: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3E2C23'
  }
})
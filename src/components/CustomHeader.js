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
      <Text style={styles.title}> JTC - Sip the <Text style={styles.tradition}>tradition</Text></Text>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5E6D3',
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 12,
    elevation: 4,
    flexDirection: 'row',     
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: '600',
    color: '#3E2C23'
  },
  tradition: {
   color: '#694721'
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
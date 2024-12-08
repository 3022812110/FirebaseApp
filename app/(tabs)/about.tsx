import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href="/" style={styles.button}>
      go to index
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e'
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
    button: {
        marginTop: 20,
        fontSize: 20,
        color:"#fff"
    }

})
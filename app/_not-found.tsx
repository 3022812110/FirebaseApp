import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{title: 'Not Found'}}/>
            <View  style={styles.container}>
                <Link href='/_not-found' style={styles.button}>
                go back to home
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e'
    },
    button: {
        marginTop: 20,
        fontSize: 20,
        color: '#fff'
    }
})
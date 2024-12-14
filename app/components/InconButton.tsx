import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function InconButton({ icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.InconButton}>
            <MaterialIcons name={icon} size={24} color='#fff' />
            <Text style={styles.InconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    InconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    InconButtonLabel: {
        color: "#fff",
        marginTop: 12,
    },
})
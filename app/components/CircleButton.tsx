import { View, Text, Pressable, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    onPress: () => void;
}

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.cricleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e"></MaterialIcons>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    cricleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#fff',
    }
})
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>你好好</Text>
      <Link href="/about" style={styles.button}>
      go to abuot
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#25292e"
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  button:{
    marginTop: 20,
    fontSize: 20,
    color: "#fff"
  }
})

import { Text, View, StyleSheet } from "react-native";
import { Image }  from 'expo-image'
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.iamgeContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>

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
  },
  iamgeContainer:{
    flex:1,
  },
  image: {
    width:320,
    height:440,
    borderRadius:18

  }

})

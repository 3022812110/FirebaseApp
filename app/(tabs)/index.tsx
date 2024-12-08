import { Text, View, StyleSheet } from "react-native";

import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.iamgeContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Cloose a phone"/>
        <Button  label="Use this phone"/>
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
  iamgeContainer:{
    flex:1,
  },
  footerContainer:{
    flex:1/3,
    alignItems:"center",
  }

})

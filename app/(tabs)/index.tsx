import { Text, View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import InconButton from "../components/InconButton";
import CircleButton from "../components/CircleButton";

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("你没有选择任何图片")
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {

  }
  const onSaveInmageAsync = () => {

  }



  return (
    <View style={styles.container}>
      <View style={styles.iamgeContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <InconButton icon="refresh" label="刷新" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <InconButton icon="save-alt" label="保存" onPress={onSaveInmageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Cloose a phone" onPress={pickImageAsync} />
          <Button label="Use this phone" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  iamgeContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  }

})

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'// import

export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission is required");
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled == true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  if(selectImage !== null) {
    return(
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri}}  style={styles.selImage}/>

      </View>
    )
  }

  //End of code

  return (
    <View style={styles.container}>
      <Image source = {{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
             style={styles.logo} />

      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
      </Text>


      <TouchableOpacity  style={styles.button} onPress={openImagePickerAsync} >


        <Text style={styles.buttonText}> Pick an image please </Text>


      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    
    backgroundColor: "#008B8B",
    padding: 20,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  counterText: {

    alignItems: "center",
    padding: 10
  },

  buttonText: {
    fontSize: 10,
    color: "FFF"
  },

  sellImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }

});

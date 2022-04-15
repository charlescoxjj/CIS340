import { StatusBar } from 'expo-status-bar';
import { Text, Image, View } from 'react-native';

export default function CatApp() {

  let pic = {uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/2dog.png"};
  
  return (
    <View style={{
      flex:1,
      justifyContent: 'Center',
      alignItems: 'Center'
    }}>
      
      <Image source={pic}
      style ={{wdith: 200, height: 200}}
        
      /> 
      <Text> Hello, here is my dog</Text>
    </View>
  );
}




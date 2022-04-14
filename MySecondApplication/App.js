import Feact from 'react';
import { Text, TextInput, View } from 'react-native';

function MyApp() {


  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello I am a student in CIS 340! {"\n"}
      </Text>
      
      </View>
  );
}

export default function MultiComp() {
  return(
     <View style={{
       flex:1,
       justifyContent: 'Center',
       alignItems: 'Center'
     }}> 
       <Text> Welcome to My Class </Text>
       <MyApp />
       <MyApp />
       <MyApp />
       <MyApp />
     </View>
  )

}
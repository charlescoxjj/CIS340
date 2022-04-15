import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My name is {props.name}, I am a student in CIS340!</Text>
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
      <Text> Welcome to CIS340 </Text>
      <Student name= "Charles Cox"/>
      <Student name= "Nick Hyatt"/>
      <Student name = "Arie Cox"/>
      <Student name = "Ella Moxey"/>
    </View>
  );
 
}


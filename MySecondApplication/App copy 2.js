import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function MyApp() {

  function getFullName(fname,mname,lname) {
    return fname + " " + mname + " " + lname;
  }
  const pet = "Dog";
  return (
    
      <Text>
        {"\n\n\n\n\n\n"}
        Hello I am a student in CIS 340! {"\n"}
        My full name is {getFullName("Charles", "Jacobus", "Cox")} {"\n"}
        I have a {pet}!
      </Text>
      
    
  );
}


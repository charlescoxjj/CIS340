import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Button } from 'react-native-web';

export default class TouchableButton extends Component  {
onPressButton() {
  alert('You tapped a button')
}

  render() {}
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButton}
        <Button
          onPress={(this._onPressButton)}
            title="Press button 1"
        />
     </View>

    <View style={styles.containerLayoutButton}
        <Button
          onPress={(this._onPressButton)} 
            title="Press button 2"
      
        <Button
          onPress={() => {
            alert('You tapped a button 3');
         }}
            title="Press button 3"
            color='green'
        /> 


      </View>
           
           <View style={styles.containerButton} >

             <Button
                  onPress={() => {
                    alert('you tapped a button');
                  }}
                  title = 'great!'
                  color ='green'
              />         

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25, 
  },

  containerLayoutButton: {
    margin:20,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  }

});

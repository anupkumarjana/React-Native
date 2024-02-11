import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          height: 70,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        
         
        }}>
        <Text style={{fontSize: 20, color: 'gray'}}>CoderaHub</Text>
        <Button title="Profile" />
      </View>
    </SafeAreaView>
  );
}

export default App;

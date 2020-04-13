import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function HomeScreen({ navigation}) {

  return (
    <View style={styles.container}>
      <Button 
      title="Go to Components Demo"
      onPress={() =>navigation.navigate('Components')}
      />
      {/* <TouchableOpacity
      onPress={()=>navigation.navigate('List')}
      >
        <Text>Go to List Screen</Text>
      </TouchableOpacity> */}
      <Button
      title='Go to List Screen'
      onPress={()=>navigation.navigate('List')}
      />
      <Button
      title='Go to Image Screen'
      onPress={()=>navigation.navigate('Image')}
      />
       <Button
      title='Go to Counter Screen'
      onPress={()=>navigation.navigate('Counter')}
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

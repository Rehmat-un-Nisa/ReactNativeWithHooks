import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity} from 'react-native';

export default function HomeScreen({ navigation}) {

  return (
    <View style={styles.container}>
      <Button 
      title="Go to Components Demo"
      onPress={() =>navigation.navigate('Components')}
      />
      <Button
      title='Go to List Demo'
      onPress={()=>navigation.navigate('List')}
      />
      <Button
      title='Go to Image Demo'
      onPress={()=>navigation.navigate('Image')}
      />
       <Button
      title='Go to Counter Demo'
      onPress={()=>navigation.navigate('Counter')}
      />
       <Button
      title='Go to Color Demo'
      onPress={()=>navigation.navigate('Color')}
      />
      <Button
      title='Go to Square Demo'
      onPress={()=>navigation.navigate('Square')}
      />
      <Button
      title='Go to Input Demo'
      onPress={()=>navigation.navigate('InputText')}
      /> 
      <Button
      title='Go to Layout Box Demo'
      onPress={()=>navigation.navigate('Box')}
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

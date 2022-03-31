import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MainNavigator() {

    const Stack = createNativeStackNavigator();
    
  return (
    <View>
        <Text>Main</Text>
    </View>
  )
}

export default MainNavigator
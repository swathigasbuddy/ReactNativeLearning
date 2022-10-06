import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tab1DetailsScreen from './BottomTab1Details';
import Details from './Details';

const Stack = createStackNavigator();

function BottomTab1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab1 Home" component={Tab1DetailsScreen} />
      <Stack.Screen name="Tab1 Details" component={Details} />
    </Stack.Navigator>
  );
}

export default BottomTab1;

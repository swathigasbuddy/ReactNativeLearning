import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './stackNavigators/Home';
import Screen1StackNavigator from './stackNavigators/Screen1';
import Screen2StackNavigator from './stackNavigators/Screen2';
import Screen3StackNavigator from './stackNavigators/Screen3';
import Screen4StackNavigator from './stackNavigators/Screen4';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'Home'} component={HomeStackNavigator} />
      <Tab.Screen name={'Screen1'} component={Screen1StackNavigator} />
      <Tab.Screen name={'Screen2'} component={Screen2StackNavigator} />
      <Tab.Screen name={'Screen3'} component={Screen3StackNavigator} />
      <Tab.Screen name={'Screen4'} component={Screen4StackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

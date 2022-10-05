import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Screen1'} component={Screen1} />
      <Tab.Screen name={'Screen2'} component={Screen2} />
      <Tab.Screen name={'Screen3'} component={Screen3} />
      <Tab.Screen name={'Screen4'} component={Screen4} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';

import Screen1StackNavigator from './stackNavigators/Screen1';
import Screen2StackNavigator from './stackNavigators/Screen2';
import Screen3StackNavigator from './stackNavigators/Screen3';
import Screen4StackNavigator from './stackNavigators/Screen4';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Screen1" component={Screen1StackNavigator} />
      <Drawer.Screen name="Screen2" component={Screen2StackNavigator} />
      <Drawer.Screen name="Screen3" component={Screen3StackNavigator} />
      <Drawer.Screen name="Screen4" component={Screen4StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

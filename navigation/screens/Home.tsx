import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab1 from './BottomTab1';
import BottomTab2 from './BottomTab2';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'BottomTab 1'} component={BottomTab1} />
      <Tab.Screen name={'BottomTab 2'} component={BottomTab2} />
    </Tab.Navigator>
  );
}

export default Home;

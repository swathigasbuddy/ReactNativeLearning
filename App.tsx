import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './navigation/screens/Home';
import DrawerTab1 from './navigation/screens/DrawerTab1';
import DrawerTab2 from './navigation/screens/DrawerTab2';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="DrawerTab1" component={DrawerTab1} />
        <Drawer.Screen name="DrawerTab2" component={DrawerTab2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

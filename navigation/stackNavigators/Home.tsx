import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
  <View style={styles.home}>
    <Text>'Home Screen'</Text>
  </View>;
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeStackNavigator;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Screen1 = () => {
  <View style={styles.home}>
    <Text>'Screen 1'</Text>
  </View>;
};

const Screen1StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Screen 1'} component={Screen1} />
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

export default Screen1StackNavigator;

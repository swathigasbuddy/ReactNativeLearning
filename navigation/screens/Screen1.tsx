import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen1 = () => {
  <View style={styles.home}>
    <Text>'Screen 1'</Text>
  </View>;
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;

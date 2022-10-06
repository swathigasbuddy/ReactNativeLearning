import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function BottomTab2() {
  return (
    <View>
      <Text style={styles.bottomTab2}>Welcome to TabB page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab2: {
    marginTop: 300,
    textAlign: 'center',
  },
});

export default BottomTab2;

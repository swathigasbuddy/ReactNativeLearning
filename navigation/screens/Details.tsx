import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function Details({navigation}: {navigation: any}) {
  return (
    <View style={styles.details}>
      <Text>Tab1 Details here!</Text>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Tab2DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.tab2Details}>
      <Text>Welcome to TabA page!</Text>
      <Button
        onPress={() => navigation.navigate('Tab1 Details')}
        title="Go to Tab1 Details"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tab2Details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab2DetailsScreen;

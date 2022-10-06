import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Tab1DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.tab1Details}>
      <Text>Welcome to Tab1 page!</Text>
      <Button
        onPress={() => navigation.navigate('Tab1 Details')}
        title="Go to Tab1 Details"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tab1Details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab1DetailsScreen;

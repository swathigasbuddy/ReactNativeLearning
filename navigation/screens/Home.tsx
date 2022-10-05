import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  <SafeAreaView>
    <View style={styles.home}>
      <Text>'Home Screen'</Text>
    </View>
    <Button title={'Home Details'} />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

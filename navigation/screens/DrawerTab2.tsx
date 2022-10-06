import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

function DrawerTab2({navigation}: {navigation: any}) {
  return (
    <View style={styles.drawerTab2}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerTab2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerTab2;

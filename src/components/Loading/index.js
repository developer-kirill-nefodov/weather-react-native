import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 30,
    paddingBottom: 100,
  },
  text: {
    fontSize: 20
  }
});

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading Weather...</Text>
    </View>
  );
};

export default Loading;

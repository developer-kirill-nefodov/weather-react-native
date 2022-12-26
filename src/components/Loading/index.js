import React from 'react';
import Lottie from 'lottie-react-native';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

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
      <StatusBar barStyle='dark-content'/>
      <Lottie
        loop
        autoPlay
        source={require('./animation.json')}
      />
    </View>
  );
};

export default Loading;

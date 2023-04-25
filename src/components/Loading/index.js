import React from 'react';
import Lottie from 'lottie-react-native';
import {StatusBar, StyleSheet, View} from 'react-native';

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
        source={require('./loading-animation.json')}
      />
    </View>
  );
};

export default Loading;

import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Lottie from "lottie-react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red'
  },
  clickText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

const Error = ({getPermissionUser}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Lottie
        loop
        autoPlay
        style={styles.animation}
        source={require('./error-animation.json')}
      />
      <View>
        <Text style={styles.text}>
          For the application to work, enable
          geolocation <Text style={styles.clickText} onPress={getPermissionUser}>
            Click here
          </Text>
        </Text>
      </View>
  </View>
  );
};

Error.propTypes = {
  getPermissionUser: PropTypes.func.isRequired
}

export default Error;

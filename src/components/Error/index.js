import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red'
  },
  clickText: {
    color: 'blue',
    fontSize: 20,
    textDecorationLine: 'underline',
    width: '100%',
    textAlign: 'right',
    paddingRight: 20,
    marginTop: 10
  }
});

const Error = ({getPermissionUser}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Text style={styles.text}>
        For the application to work, enable geolocation
      </Text>
      <Text style={styles.clickText} onPress={getPermissionUser}>
        Click here
      </Text>
    </View>
  );
};

export default Error;

import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

import WeatherIcon from "./WeatherIcon";
import {weatherIconDefault, weatherOption} from "../../utils/option/weather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 40,
    color: '#fff'
  },
  containerIcon: {
    width: 96,
    height: 96,
  },
  title: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  description: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
  }
});

const Weather = ({temp, weather}) => {
  return (
    <LinearGradient
      colors={weatherOption[weather.main].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content'/>
      <View style={styles.container}>
        {weatherIconDefault ? (
          <View style={styles.containerIcon}>
            <WeatherIcon iconName={weather.icon}/>
          </View>
        ) : (
          <MaterialCommunityIcons
            size={96}
            color='#fff'
            name={weatherOption[weather.main].iconName}
          />
        )}
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{weather.main}</Text>
        <Text style={styles.description}>{weather.description}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weather: PropTypes.exact({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    main: PropTypes.oneOf([
      'Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Dust', 'Smoke', 'Haze', 'Mist', 'Clear', 'Clouds'
    ]),
  }).isRequired,
}

export default Weather;

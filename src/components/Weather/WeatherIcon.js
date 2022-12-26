import React from 'react';
import PropTypes from "prop-types";
import {Image, StyleSheet} from "react-native";

import {ICON_URL} from '@env';

const styles = StyleSheet.create({
  customIcon: {
    width: '100%',
    height: '100%',
  }
});

const WeatherIcon = ({iconName}) => {
  return (
    <Image
      fadeDuration={0}
      style={styles.customIcon}
      source={{uri: `${ICON_URL}${iconName}@2x.png`}}
    />
  );
};

WeatherIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
}

export default WeatherIcon;

// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

type HeaderPropsType = {
 text: string,
 customStyle?: any,
 type: string,
};

const styles = StyleSheet.create({
  'header-one': {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-two': {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  'header-three': {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 19,
    marginBottom: 19,
  },
  'header-four': {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 21,
    marginBottom: 21,
  },
  'header-five': {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-six': {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
  },
});

const Header = (props: HeaderPropsType): any => (
  <Text
    style={[styles[props.type], props.customStyle]}
  >{props.text}</Text>
);

Header.propTypes = {
  text: React.PropTypes.string.isRequired,
  customStyle: React.PropTypes.any,
  type: React.PropTypes.string.isRequired,
};

Header.defaultProps = {
  customStyle: undefined,
};

export default Header;

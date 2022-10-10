import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Navbar = () => (
  <View style={styles.container}>
    <Icon name="home" size={26} color="#fff" />
    <Icon name="message1" size={26} color="#fff" />
    <Icon name="addusergroup" size={26} color="#fff" />
    <Icon name="infocirlceo" size={26} color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#4FCBC2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

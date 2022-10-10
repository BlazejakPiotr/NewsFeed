import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Searchbar = () => (
  <View
    style={{
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
    }}>
    <Icon name="search1" size={18} color="#28235F" style={{marginLeft: 12}} />
  </View>
);

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface NewsFeedCategoryInterface {
  text: string;
  active?: boolean;
}

export const NewsFeedCategory = (props: NewsFeedCategoryInterface) => (
  <View style={style.container}>
    <View style={props.active ? style.active : style.inactive}>
      <Text style={props.active ? style.activeText : style.inactiveText}>
        {props.text}
      </Text>
    </View>
  </View>
);

const style = StyleSheet.create({
  container: {
    width: 97,
    height: 30,
    marginRight: 8,
  },
  active: {
    backgroundColor: '#4FCBC2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  activeText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
  },
  inactive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#7B7B7B',
    borderWidth: 2,
  },
  inactiveText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#7B7B7B',
  },
});

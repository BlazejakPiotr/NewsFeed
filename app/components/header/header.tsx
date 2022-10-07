import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderPropsInterface {
  text?: string;
  goBack?: boolean;
  avatar?: boolean;
}

export const Header = (props: HeaderPropsInterface) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {props.goBack && <Icon name="arrowleft" size={24} color="#28235F" />}
      </View>

      {props.text && <Text style={styles.text}>{props.text}</Text>}
      <View style={styles.wrapper}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://picsum.photos/50',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  wrapper: {
    flex: 1,
  },
  text: {
    flex: 5,
    textAlign: 'center',
    color: '#28235F',
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 3,
  },
});

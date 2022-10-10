import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderPropsInterface {
  text?: string;
  goBack?: boolean;
  action?: any;
}

export const Header = (props: HeaderPropsInterface) => {
  const navigation = useNavigation<any>();
  const {goBack, action, text} = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {goBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={24} color="#28235F" />
          </TouchableOpacity>
        )}
      </View>

      {text && <Text style={styles.text}>{text}</Text>}
      <View style={styles.wrapper}>
        {!action ? (
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://picsum.photos/50',
            }}
          />
        ) : (
          <TouchableOpacity onPress={action}>
            <Text
              style={{
                color: '#28235F',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
              }}>
              Dodaj
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 23,
    flex: 1,
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

import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Header} from '../../components/header/header';
export const NewsFeedDetailsScreen = () => {
  const route = useRoute<any>();
  const {id} = route.params;
  return (
    <View style={{flex: 1}}>
      <Header goBack text="Post" />
      <View style={{flex: 10, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>ID bieżącego posta</Text>
        <Text style={{fontSize: 18, textAlign: 'center'}}>{id}</Text>
      </View>
    </View>
  );
};

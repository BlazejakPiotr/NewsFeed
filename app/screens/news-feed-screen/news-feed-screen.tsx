import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header} from '../../components/header/header';
import {NewsFeedCategory} from '../../components/news-feed-category/news-feed-category';
import {NewsFeedListing} from '../../components/news-feed-listing/news-feed-listing';
import {Searchbar} from '../../components/searchbar/searchbar';

export const NewsFeedScreen = () => {
  return (
    <View style={Wrapper.container}>
      <Header text="Newsfeed" />
      <Searchbar />
      <ScrollView horizontal style={{flex: 1, marginTop: 20}}>
        <NewsFeedCategory text="Tablica" active />
        <NewsFeedCategory text="Wydarzenia" />
        <NewsFeedCategory text="Artykuły" />
        <NewsFeedCategory text="Wideo" />
      </ScrollView>
      <NewsFeedListing />
    </View>
  );
};

export const Wrapper = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    paddingHorizontal: 23,
  },
});

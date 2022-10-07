import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Data from '../../../feed-data.json';

type NewsItemInterface = {
  _id: string;
  isLiked: boolean;
  title: string;
  description: string;
  author: {
    avatar: string;
    name: string;
  };
  created_At: string;
  images: Array<{id: number; url: string}>;
};

export const NewsFeedListing = () => {
  const posts: NewsItemInterface[] = Data;

  const NewsItem = ({item}: {item: NewsItemInterface}) => (
    <View style={{marginBottom: 30}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={style.avatar} source={{uri: item.author.avatar}} />
        <Text style={style.heading}>{item.author.name}</Text>
      </View>
      {item.images.length > 0 && (
        <Image style={style.photo} source={{uri: item.images[0].url}} />
      )}
      <View style={style.row}>
        <Text style={style.heading}>{item.title}</Text>
        <Icon
          name={item.isLiked ? 'heart' : 'hearto'}
          size={24}
          color={item.isLiked ? '#FF1717' : '#28235F'}
        />
      </View>
      <Text style={style.text} numberOfLines={1}>
        {item.description}
      </Text>
      <View style={style.row}>
        <Text style={{fontSize: 10, fontFamily: 'Montserrat-Medium'}}>
          {item.created_At.slice(0, 10)}
        </Text>
        <Text style={style.link}>Więcej</Text>
      </View>
    </View>
  );

  return (
    <View style={style.container}>
      <FlatList
        keyExtractor={(item: NewsItemInterface) => item._id}
        numColumns={1}
        data={posts}
        maxToRenderPerBatch={1}
        windowSize={1}
        initialNumToRender={10}
        removeClippedSubviews={true}
        // onEndReached={}
        onEndReachedThreshold={0.2}
        // ListFooterComponent={}
        renderItem={NewsItem}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 3,
    marginRight: 12,
  },
  photo: {
    marginVertical: 12,
    width: '100%',
    height: 215,
    objectFit: 'cover',
    borderRadius: 10,
  },
  heading: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#28235F',
  },
  text: {
    color: '#7B7B7B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 4,
  },
  link: {
    color: '#4FCBC2',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
});

import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
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
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const {data} = route.params;
  const [posts, setPosts] = useState<NewsItemInterface[]>([]);

  useEffect(() => {
    loadMoreNews();
  }, []);

  useEffect(() => {
    if (data) {
      setPosts([data, ...posts]);
    }
  }, [data]);

  const loadMoreNews = () => {
    let temp: NewsItemInterface[] = [...posts];
    setTimeout(
      () =>
        Data.map((item, index) => {
          if (!posts && index < 10) {
            temp.push(item);
          } else if (index > posts.length - 1 && index < posts.length + 9) {
            temp.push(item);
          }
          setPosts(temp);
        }),
      1000,
    );
  };

  const NewsItem = ({item}: {item: NewsItemInterface}) => (
    <View style={{marginBottom: 30}} testID="NewsFeedPost">
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
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetails', {id: item._id})}>
          <Text style={style.link}>Więcej</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={style.container}>
      <FlatList
        keyExtractor={(item: NewsItemInterface) => item._id}
        numColumns={1}
        data={posts}
        initialNumToRender={5}
        windowSize={10}
        removeClippedSubviews={true}
        onEndReachedThreshold={0.2}
        onEndReached={loadMoreNews}
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

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsFeedPostScreen, NewsFeedScreen} from './app/screens';
import {NewsFeedDetailsScreen} from './app/screens/news-feed-details-screen/news-feed-details-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Newsfeed"
        component={NewsFeedScreen}
        initialParams={{data: null}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsFeedDetailsScreen}
        initialParams={{id: null}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#4FCBC2',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Icon name="home" size={26} color="#fff" />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Postfeed"
          component={NewsFeedPostScreen}
          options={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Icon name="message1" size={26} color="#fff" />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

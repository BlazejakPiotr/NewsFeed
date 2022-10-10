import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsFeedPostScreen, NewsFeedScreen} from './app/screens';
import {NewsFeedDetailsScreen} from './app/screens/news-feed-details-screen/news-feed-details-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
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
        }}>
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Postfeed" component={NewsFeedPostScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

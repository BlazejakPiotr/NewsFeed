import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsFeedPostScreen, NewsFeedScreen} from './app/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Newsfeed"
          component={NewsFeedScreen}
          initialParams={{data: null}}
        />
        <Tab.Screen name="Postfeed" component={NewsFeedPostScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

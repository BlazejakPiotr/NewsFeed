import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsFeedPostScreen, NewsFeedScreen} from './app/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Newsfeed" component={NewsFeedScreen} />
        <Stack.Screen name="Postfeed" component={NewsFeedPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

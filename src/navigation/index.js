import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as NavigationService from '../services/navigationService';
import Home from '../screens/Home';
import DetailScreen from '../screens/detialScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="detailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

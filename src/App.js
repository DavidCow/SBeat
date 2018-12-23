import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import AddSmile from './scenes/AddSmile';
import Login from './scenes/Login';
import MyVideos from './scenes/MyVideos';

const MyVideosStack = createStackNavigator({
  MyVideos: MyVideos
});

const AddSmileStack = createStackNavigator({
  AddSmile: AddSmile
});

const LoginStack = createStackNavigator({
  Login: Login
});


export default createAppContainer(createBottomTabNavigator(
  {
    AddSmile: AddSmileStack,
    Login: LoginStack,
    MyVideos: MyVideosStack
  },
  {
    /* Other configuration remains unchanged */
  }
));
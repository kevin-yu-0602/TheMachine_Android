// To run emulator on windows, run command:
// cd %ANDROID_HOME%/tools && emulator.exe -avd Pixel_2_API_25
import React, { Component } from 'react';
import { 
    Platform, 
    StyleSheet, 
    Text, 
    View } from 'react-native';
import { 
    TabNavigator, 
    TabBarBottom 
} from 'react-navigation';
import './global.js'

import MainTabNavigation from './navigation/MainTabNavigator';
import RootNavigation from './navigation/RootNavigation';

//import firebase from 'react-native-firebase';
//import { GoogleSignin } from 'react-native-google-signin';

type Props = {};

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
    
        this.state = {
            user: true,
            loading: true,
        };
    }

    render() {

        if (this.state.user) return <RootNavigation />;

        return <LoginScreen />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

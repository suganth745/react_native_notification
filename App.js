import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase from "@react-native-firebase/app";


export default class App extends Component {

  async componentDidMount(){

    

var firebaseConfig = {
   
    androidClientId:undefined,
    apiKey:"AIzaSyAZl_l4rPTu2lUXfFlD8vBTH2dGIeOqcMs",
    appId:"1:88520859046:web:ec2f56bd01520d1f80c367",
    clientId: undefined,
    databaseURL:undefined,
    deepLinkURLScheme:undefined,
    gaTrackingId:undefined,
    messagingSenderId: "88520859046",
    projectId:"demotesting-e0e41",
    storageBucket: "demotesting-e0e41.appspot.com",
  };
  // Initialize Firebase
  const config = {
  name: 'SECONDARY_APP',
};


Firebase.initializeApp(Firebase.app()._options, config);

console.log("firebase log",Firebase.app()._options);


PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});
  }

  render() {
    return (
      <View style={ {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

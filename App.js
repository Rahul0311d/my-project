import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import DrawerContent from './DrawerContent';

import HomeScreen from './Homescreen';
import DetailScreen from './DetailScreen';


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#9932CC'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 90,
    }
  }

  }>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'My Notes',
      headerLeft: () => (
        <Icon.Button
          name="menu"
          size={25}
          backgroundColor='#9932CC'

          onPress={() => navigation.openDrawer()
          }>
        </Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
)

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#9932CC'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 80,
    }
  }

  }>
    <DetailStack.Screen name="Details" component={DetailScreen} options={{
      title: 'Login Page',
      headerLeft: () => (
        <Icon.Button
          name="menu"
          size={25}
          backgroundColor='#9932CC' onPress={() => navigation.openDrawer()
          }>
        </Icon.Button>
      )
    }} />
  </DetailStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={DetailStackScreen} />
      </Drawer.Navigator>
      {/* drawerContent={props => <DrawerContent {...props} />} */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

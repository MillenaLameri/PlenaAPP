import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeRoutes} from '../routes/home.routes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {HomeScreen} from '../../pages/home/containers/HomeScreen';
import {FaturaScreen} from '../../pages/Faturas/containers/FaturaScreen';

const Tab = createBottomTabNavigator();

export const TabStack: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeRoutes.Home}
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#777',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={HomeRoutes.Home}
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name={'home'} size={size} color={'orange'} />
          ),
          title: 'home',
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={HomeRoutes.Fatura}
        component={FaturaScreen}
        options={() => ({
          tabBarIcon: ({color, size}) => (
            <Entypo name={'credit'} size={size} color={'orange'} />
          ),
          title: 'faturas',
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={'teste2'}
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name={'user'} size={size} color={'orange'} />
          ),
          title: 'profile',
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

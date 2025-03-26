import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MenuUteis} from './components/MenuPrincipal';
import {Faturas} from './components/Faturas';
import {Planos} from './components/Planos';
import {BoxFaturaHome} from './components/HeaderFatura';
import {ParaVoce} from './components/ParaVoce';

export const Home = () => {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header com Degradê */}
      <LinearGradient
        colors={['#F97316', '#FDBA74']}
        className=" px-6 rounded-b-3xl"
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingBottom: 130,
        }}>
        <View className="flex-row justify-between items-center">
          <View>
            <Image
              source={require('../../img/logo.png')}
              style={{width: 90, height: 90}}
              resizeMode="contain"
            />
            <Text className="text-white text-4xl font-bold">Olá, Millena</Text>
            <Text className="text-white text-sm">
              Em que podemos te ajudar?
            </Text>
          </View>
        </View>
      </LinearGradient>
      <BoxFaturaHome />
      <ScrollView
        className="px-6"
        showsVerticalScrollIndicator={false}
        style={{top: 60}}>
        <MenuUteis />
        <Planos />
        <ParaVoce />
        <Faturas />
      </ScrollView>
    </View>
  );
};

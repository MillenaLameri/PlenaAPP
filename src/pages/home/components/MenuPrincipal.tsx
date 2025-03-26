import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../../navigation/routes/home.routes';

export const MenuUteis = () => {
  const navigation = useNavigation();

  const goToFatura = () => {
    navigation.navigate('Processos', {
      screen: HomeRoutes.Fatura,
    });
  };
  return (
    <View className="flex-row justify-around">
      <View className="items-center">
        <TouchableOpacity className="bg-orange-50 w-16 h-16 rounded-full shadow items-center justify-center">
          <MaterialCommunityIcons name={'file-powerpoint-box'} size={22} color={'orange'} />
        </TouchableOpacity>
        <Text className="text-gray-800 text-sm mt-2">Planos</Text>
      </View>
      <View className="items-center">
        <TouchableOpacity
          onPress={goToFatura}
          className="bg-orange-50 w-16 h-16 rounded-full shadow items-center justify-center">
          <Entypo name={'credit'} size={20} color={'orange'} />
        </TouchableOpacity>
        <Text className="text-gray-800 text-sm mt-2">Faturas</Text>
      </View>
      <View className="items-center">
        <TouchableOpacity className="bg-orange-50 w-16 h-16 rounded-full shadow items-center justify-center">
          <AntDesign name={'wechat'} size={20} color={'orange'} />
        </TouchableOpacity>
        <Text className="text-gray-800 text-sm mt-2">Chamados</Text>
      </View>
      <View className="items-center">
        <TouchableOpacity className="bg-orange-50 w-16 h-16 rounded-full shadow items-center justify-center">
          <Entypo name={'location-pin'} size={20} color={'orange'} />
        </TouchableOpacity>
        <Text className="text-gray-800 text-sm mt-2">Endereço</Text>
      </View>
    </View>
  );
};

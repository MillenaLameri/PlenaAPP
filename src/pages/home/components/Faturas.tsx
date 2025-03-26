import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {HomeRoutes} from '../../../navigation/routes/home.routes';
import {useNavigation} from '@react-navigation/native';

export const Faturas = () => {
  const navigation = useNavigation();
  const goToFaturaDetails = () => {
    navigation.navigate('Processos', {
      screen: HomeRoutes.Fatura,
    });
  };

  return (
    <View className="mb-20">
      <Text className="text-gray-800 text-xl font-semibold mb-4">Faturas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="bg-white w-64 p-4 mr-4 rounded-lg shadow-md">
          <TouchableOpacity onPress={goToFaturaDetails}>
            <Text className="text-gray-800 text-base font-semibold mt-2">Outubro 2024 </Text>
            <View className="flex-row items-center">
              <Feather name={'check'} size={22} color={'#055f41'} style={{marginRight: 8}} />
              <Text style={{color: '#055f41'}} className=" text-sm font-bold">
                Paga
              </Text>
            </View>
            <Text className="text-gray-800 text-base font-semibold mt-2">R$ 368,55</Text>
            <Text className="text-gray-500 text-sm">Vencimento em 30/10/2024</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white w-64 p-4 mr-4 rounded-lg shadow-md">
          <TouchableOpacity onPress={goToFaturaDetails}>
            <Text className="text-gray-800 text-base font-semibold mt-2">Novembro 2024</Text>
            <View className="flex-row items-center">
              <Feather name={'alert-circle'} size={22} color={'orange'} style={{marginRight: 8}} />
              <Text className="text-orange-500 text-sm font-bold">Aguardando pagamento</Text>
            </View>
            <Text className="text-gray-800 text-base font-semibold mt-2">R$ 400,00</Text>
            <Text className="text-gray-500 text-sm">Vencimento em 15/11/2024</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white w-64 p-4 mr-4 rounded-lg shadow-md">
          <TouchableOpacity onPress={goToFaturaDetails}>
            <Text className="text-gray-800 text-base font-semibold mt-2">Dezembro 2024</Text>
            <Text className="text-gray-800 text-base font-semibold mt-2">R$ 420,00</Text>
            <Text className="text-gray-500 text-sm">Vencimento em 15/12/2024</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';

export const ParaVoce = () => {
  return (
    <View className="mt-8 mb-8">
      <Text className="text-gray-800 text-xl font-semibold mb-4">
        Especial para você
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="bg-white w-64 p-4 mr-4 rounded-lg shadow-md">
          <TouchableOpacity>
            <Image
              source={{uri: 'https://via.placeholder.com/150'}}
              className="w-full h-32 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-gray-800 text-base font-semibold mt-2">
              Plena em Black Friday — 600Mega: R$ 100/mês com Wi-fi ilimitado
            </Text>
            <Text className="text-gray-500 text-sm">Saiba Mais</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white w-64 p-4 rounded-lg shadow-md">
          <TouchableOpacity>
            <Image
              source={{uri: 'https://via.placeholder.com/150'}}
              className="w-full h-32 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-gray-800 text-base font-semibold mt-2">
              Plena em Black Friday — 600Mega: R$ 100/mês com Wi-fi ilimitado
            </Text>
            <Text className="text-gray-500 text-sm">Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

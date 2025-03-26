import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

export const Planos = () => {
  return (
    <View className="bg-white p-4 rounded-xl shadow mt-5">
      <Text className="text-gray-600 text-sm">Plano:</Text>
      <Text className="text-gray-800 font-bold text-lg">
        400 MEGAS PIX R$ 166,99 + GLOBOPLAY + SEUPLAY + URBANTV + NEWCO
      </Text>
      <TouchableOpacity className="bg-orange-500 mt-4 px-4 py-2 rounded-lg">
        <Text className="text-white text-center font-semibold">Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );
};

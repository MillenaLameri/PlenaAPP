import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Pagamentos = () => {
  return (
    <View
      style={{
        paddingTop: 40,
      }}
      className="mb-10">
      <Text className="text-gray-800 text-xl font-semibold mb-4">Opções de pagamento</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={{width: 100, height: 90, margin: 10}}
          className="bg-green-700 mb-5 p-4 rounded-2xl">
          <MaterialIcons name={'pix'} size={20} color={'white'} />
          <Text style={{marginTop: 8}} className="text-white  text-base">
            Pague com Pix
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 100, height: 90, margin: 10}}
          className="bg-orange-500 p-4 rounded-2xl">
          <AntDesign name={'barcode'} size={20} color={'white'} />
          <Text style={{marginTop: 8}} className="text-white text-base">
            Pague com Boleto
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

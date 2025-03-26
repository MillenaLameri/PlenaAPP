import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {HomeRoutes} from '../../../navigation/routes/home.routes';
import {useNavigation} from '@react-navigation/native';

export const BoxFaturaHome = () => {
  // Recebendo navigation como prop
  const [exibePix, setExibePix] = useState(true);
  const navigation = useNavigation();
  const togglePixBox = () => {
    setExibePix(prevState => !prevState);
  };

  const goToFatura = () => {
    navigation.navigate('Processos', {
      screen: HomeRoutes.Fatura,
    });
  };

  return (
    <View className="absolute left-5 right-5 bg-white p-4 rounded-2xl shadow-lg" style={{top: 160}}>
      {exibePix ? (
        <TouchableOpacity onPress={goToFatura}>
          {/* Redireciona ao clicar */}
          <View className="flex-row justify-between items-center">
            <Text style={{fontSize: 25}} className="text-gray-800 font-bold">
              R$400,00
            </Text>
            <View className="flex-row items-center">
              <Feather name={'alert-circle'} size={22} color={'orange'} style={{marginRight: 8}} />
              <Text className="text-orange-500 text-sm font-bold">Aguardando pagamento</Text>
            </View>
          </View>
          <View className="flex-row justify-between mt-4">
            <Text className="text-gray-500 text-sm">Vencimento: 15/11/2024</Text>
            <View className="items-center">
              <TouchableOpacity onPress={togglePixBox} className="bg-green-700 p-4 rounded-2xl">
                <MaterialIcons name={'pix'} size={20} color={'white'} />
                <Text className="text-white p-1">Pague no Pix</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-800 text-xl font-bold">Pague com Pix </Text>
            <View className="flex-row items-center">
              <Feather name={'alert-circle'} size={22} color={'orange'} style={{marginRight: 8}} />
              <Text className="text-orange-500 text-sm font-bold">Aguardando pagamento</Text>
            </View>
          </View>
          <Text className="text-gray-800 mt-2 mb-1 font-bold text-xl"> R$400,00</Text>
          <View className="bg-gray-200 p-1 rounded-xl">
            <Text className="text-gray-500 text-sm mt-2">12345... </Text>
          </View>
          <TouchableOpacity onPress={togglePixBox} className="bg-orange-500 p-1 rounded-xl mt-2">
            <Text className="text-white text-center font-bold">Copiar Código</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {HomeRoutes} from '../../navigation/routes/home.routes';

export const TelaInicial = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    navigation.navigate('Processos', {
      screen: HomeRoutes.Home,
    });

    navigation.reset({
      index: 0,
      routes: [{name: 'Processos'}],
    });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="bg-white flex-1">
          <Image
            source={require('../../img/Vector21.png')}
            className="absolute w-full h-100"
          />
          <View
            style={{
              flexGrow: 1,
              justifyContent: 'center',
              paddingHorizontal: 30,
            }}>
            <View style={{alignItems: 'center', marginBottom: 10}}>
              <Image
                source={require('../../img/logo.png')}
                style={{width: 150, height: 150}}
                resizeMode="contain"
              />
            </View>
            <TextInput
              className="bg-white p-4 rounded-xl mb-6 shadow-2xl placeholder-gray-600 text-gray-800"
              placeholder="CPF"
              value={username}
              onChangeText={setUsername}
              style={{marginBottom: 20}}
            />
            <TextInput
              className="bg-white p-4 rounded-xl mb-6 shadow-2xl placeholder-gray-600 text-gray-800"
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{marginBottom: 20}}
            />
            <TouchableOpacity
              className="bg-orange-400 p-4 rounded-xl items-center"
              onPress={handleLogin}
              style={{marginBottom: 20}}>
              <Text className="text-white text-lg font-semibold">Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mt-4">
              <Text className="text-center text-orange-600">
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

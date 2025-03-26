import React, {useState} from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Faturas} from './components/Faturas';
import {DetalheFatura} from './components/DetalhesFatura';
import {Pagamentos} from './components/Pagamentos';

export const Fatura: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  return (
    <View className="flex-1 bg-gray-100">
      <LinearGradient
        colors={['#F97316', '#FDBA74']}
        className="px-6 rounded-b-3xl"
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingBottom: 40,
        }}>
        <View className="flex-row justify-between items-center">
          <View>
            <Image
              source={require('../../img/logo.png')}
              style={{width: 90, height: 90}}
              resizeMode="contain"
            />
            <Text className="text-white text-4xl font-bold">Fatura</Text>
          </View>
        </View>
        <Faturas onSelectMonth={setSelectedMonth} />
      </LinearGradient>

      <ScrollView className="px-4" showsVerticalScrollIndicator={false} style={{top: 20}}>
        <DetalheFatura month={selectedMonth} onPaymentStatusChange={setPaymentStatus} />

        {paymentStatus !== 'Paga' && <Pagamentos />}
      </ScrollView>
    </View>
  );
};

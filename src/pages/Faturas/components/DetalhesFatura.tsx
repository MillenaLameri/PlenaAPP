import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface DetalheFaturaProps {
  month: string | null;
  onPaymentStatusChange: (status: string) => void; // Nova prop
}

export const DetalheFatura: React.FC<DetalheFaturaProps> = ({month, onPaymentStatusChange}) => {
  let details;

  switch (month) {
    case 'Outubro 2024':
      details = {amount: 'R$ 368,55', dueDate: '30/10/2024', status: 'Paga'};
      break;
    case 'Novembro 2024':
      details = {amount: 'R$ 400,00', dueDate: '15/11/2024', status: 'Aguardando Pagamento'};
      break;
    case 'Dezembro 2025':
      details = {amount: 'R$ 450,00', dueDate: '15/12/2024', status: 'Aguardando Pagamento'};
      break;
    default:
      details = {amount: '', dueDate: '', status: ''};
      break;
  }

  useEffect(() => {
    onPaymentStatusChange(details.status);
  }, [month, details.status, onPaymentStatusChange]);

  return (
    <View>
      {month ? (
        <>
          <Text className="text-lg font-bold">{month}</Text>
          <View style={{paddingTop: 40}}>
            <Text style={{color: '#055f41'}} className="font-bold text-4xl">
              {details.amount}
            </Text>
            <View className="flex-row items-center mt-2">
              <Feather
                name={details.status === 'Paga' ? 'check' : 'alert-circle'}
                size={22}
                color={details.status === 'Paga' ? 'green' : 'orange'}
              />
              <Text
                style={{color: details.status === 'Paga' ? '#055f41' : 'orange'}}
                className="text-lg font-bold ml-1">
                {details.status}
              </Text>
            </View>
            <Text className="text-gray-800 text-base mt-2 ml-1">Venceu dia {details.dueDate}</Text>
            <Text className="text-gray-500 text-sm font-semibold mt-2 ml-1">
              Próxima fatura fechará 30 de Novembro
            </Text>
          </View>
        </>
      ) : (
        <Text className="text-lg font-bold">Selecione um mês para ver os detalhes.</Text>
      )}
    </View>
  );
};

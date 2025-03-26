import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {FaturaBox} from './FaturaBox';

interface FaturasProps {
  onSelectMonth: (month: string) => void;
}

export const Faturas: React.FC<FaturasProps> = ({onSelectMonth}) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  // Mapa de valores de fatura para cada mês
  const monthAmounts: Record<string, string> = {
    'Outubro 2024': 'R$ 368,55',
    'Novembro 2024': 'R$ 400,00', // Alterar para o valor desejado
    'Dezembro 2025': 'R$ 420,00', // Alterar para o valor desejado
  };

  // Função para lidar com a seleção de um mês
  const handleSelectMonth = (month: string) => {
    setSelectedMonth(month);
    onSelectMonth(month);
  };

  return (
    <View>
      <Text className="text-white text-sm font-semibold mt-2 mb-2">
        Selecione abaixo a fatura desejada
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FaturaBox
          label="Outubro 2024"
          amount={monthAmounts['Outubro 2024']} // Pega o valor do mês selecionado
          isSelected={selectedMonth === 'Outubro 2024'}
          onPress={() => handleSelectMonth('Outubro 2024')}
        />
        <FaturaBox
          label="Novembro 2024"
          amount={monthAmounts['Novembro 2024']} // Pega o valor do mês selecionado
          isSelected={selectedMonth === 'Novembro 2024'}
          onPress={() => handleSelectMonth('Novembro 2024')}
        />
        <FaturaBox
          label="Dezembro 2025"
          amount={monthAmounts['Dezembro 2025']} // Pega o valor do mês selecionado
          isSelected={selectedMonth === 'Dezembro 2025'}
          onPress={() => handleSelectMonth('Dezembro 2025')}
        />
      </ScrollView>
    </View>
  );
};

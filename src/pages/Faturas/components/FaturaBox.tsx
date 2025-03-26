import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

interface FaturaBoxProps {
  label: string;
  amount: string;
  isSelected: boolean;
  onPress: () => void;
}

export const FaturaBox: React.FC<FaturaBoxProps> = ({label, amount, isSelected, onPress}) => {
  return (
    <View
      style={{
        backgroundColor: isSelected ? 'green' : 'white', // Altera fundo para verde se selecionado
        borderColor: 'green',
        borderWidth: 2,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8, // Espaçamento entre as boxes
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: isSelected ? 'white' : 'gray', // Muda a cor do texto para branco quando selecionado
            fontWeight: '600',
          }}>
          {label}
        </Text>
        <Text
          style={{
            color: isSelected ? 'white' : 'gray', // Muda a cor do texto para branco quando selecionado
            fontWeight: '600',
          }}>
          {amount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

import React, {JSX} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  code: string;
  rate: number;
  isFavorite: boolean;
  onToggleFavorite: (currency: string) => void;
}

export default function CurrencyItem({ code, rate, isFavorite, onToggleFavorite }: Props): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
      <Text>{code}: {rate.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => onToggleFavorite(code)}>
        <Text style={{ color: isFavorite ? 'gold' : 'gray' }}>{isFavorite ? '+' : '-'}</Text>
      </TouchableOpacity>
    </View>
  );
}

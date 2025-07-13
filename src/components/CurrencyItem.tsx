import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {COLORS} from '../styles/globalStyle';
import {styles} from '../styles/CurrencyStyle';
import {ICurrencyItem} from '@models';

export default function CurrencyItem({code, rate, isFavorite, isRemove, onToggleFavorite}: ICurrencyItem) {
  return (
    <TouchableOpacity style={styles.currencyItem} onPress={() => onToggleFavorite(code)}>
      <View>
        <Text style={styles.currencyCode}>{code}</Text>
        <Text style={styles.currencyRate}>{rate.toFixed(2)}</Text>
      </View>
      {isRemove ? (
        <Text style={{color: isFavorite ? COLORS.favorite : COLORS.textSecondary}}>🗑️</Text>
      ) : (
        <Text style={{color: isFavorite ? COLORS.favorite : COLORS.textSecondary}}>{isFavorite ? '⭐' : '☆'}</Text>
      )}
    </TouchableOpacity>
  );
}

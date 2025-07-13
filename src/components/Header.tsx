import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import {styles} from '../styles/CurrencyStyle';
import {IHeader} from '@models';

export default function Header({title, onBack, rightButton}: IHeader) {
  return (
    <View style={globalStyles.headerContainer}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.favButton}>
          <Text style={styles.favButtonText}>Назад</Text>
        </TouchableOpacity>
      ) : (
        <View style={{width: 60}} />
      )}

      <Text style={globalStyles.headerTitle}>{title}</Text>

      <View style={{width: 60}}>{rightButton}</View>
    </View>
  );
}

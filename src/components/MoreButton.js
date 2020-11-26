import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MoreButton({ onPress }) {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={onPress}>
          <MaterialIcons
            name='more-horiz'
            size={22}
            color='#B7B7B7' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})
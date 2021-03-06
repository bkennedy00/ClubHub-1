import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import Search from '../../components/Search';
import SearchButton from '../../components/SearchButton';
import global_styles from '../../assets/styles/GlobalStyle';
import card_styles from '../../assets/styles/CardStyle';
import Card from '../../components/Card';
import MoreButton from '../../components/MoreButton';

export default function PreviousTrainingSessionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={global_styles.searchSection}>
        <Search />
        <SearchButton>
          <MaterialIcons
            name='filter-list'
            size={24}
            color="#b7b7b7" />
        </SearchButton>
      </View>

      <View style={{ marginTop: 30 }}>
        <Card onPress={() => navigation.navigate('ViewPreviousTrainingSession')}>
          <View style={card_styles.container}>
            <View style={card_styles.textViewNoCircle}>
              <Text style={card_styles.textOne}>Shooting drills</Text>
              <Text style={card_styles.textTwo}>3rd December 2019</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </Card>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    padding: 20,
  }
});
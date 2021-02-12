import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import Card from '../../components/Card';
import card_styles from '../../assets/styles/CardStyle';
import MoreButton from '../../components/MoreButton';

export default function TeamScreen({ navigation }) {

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#b7b7b7'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={styles.container}>

      <Text style={{...global_styles.title, marginBottom: 10}}>Team statistics</Text>
      <View style={large_card_style.container}>
        <View style={large_card_style.largeLeftCard}>
          <View style={styles.cardCircle}>
            <Text style={styles.cardCircleText}>0</Text>
          </View>
          <Text style={large_card_style.text}>Wins</Text>
        </View>
        <View style={large_card_style.largeCenterCard}>
          <View style={styles.cardCircle}>
            <Text style={styles.cardCircleText}>0</Text>
          </View>
          <Text style={large_card_style.text}>Losses</Text>
        </View>
        <View style={large_card_style.largeRightCard}>
          <View style={styles.cardCircle}>
            <Text style={styles.cardCircleText}>0</Text>
          </View>
          <Text style={large_card_style.text}>Draws</Text>
        </View>
      </View>

      <Text style={{...global_styles.title, marginBottom: 4, marginTop: 30 }}>Players</Text>
      <Card onPress={() => navigation.navigate('Player')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <Text style={card_styles.playerNumber}>6</Text>
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>Shane McCleary</Text>
            <Text style={card_styles.textTwo}>Half back</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton />
          </View>
        </View>
      </Card>
      <Card onPress={() => navigation.navigate('Player')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <Text style={card_styles.playerNumber}>9</Text>
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>Keane Callan</Text>
            <Text style={card_styles.textTwo}>Midfield</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton />
          </View>
        </View>
      </Card>
      <Card onPress={() => navigation.navigate('Player')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <Text style={card_styles.playerNumber}>14</Text>
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>Jack Lynch</Text>
            <Text style={card_styles.textTwo}>Full forward</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton />
          </View>
        </View>
      </Card>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  icon: {
    marginRight: 20,
  },
  bigCircle: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100 / 2,
    height: 100,
    marginBottom: 20,
    width: 100,
  },
  cardCircle: {
    alignSelf: 'center',
    backgroundColor: '#f0f2f7',
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
  },
  cardCircleText: {
    color: '#1d3557',
    fontFamily: 'montserrat-semibold',
    fontSize: 22,
    marginTop: 12,
    textAlign: 'center',
  }
});
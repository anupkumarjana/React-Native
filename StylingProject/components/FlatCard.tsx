import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.flatCardContainer}>
        <View style={[styles.flatCards, styles.flatCard1]}>
          <Text style={styles.flatCardText}>red</Text>
        </View>
        <View style={[styles.flatCards, styles.flatCard2]}>
          <Text style={styles.flatCardText}>blue</Text>
        </View>
        <View style={[styles.flatCards, styles.flatCard3]}>
          <Text style={styles.flatCardText}>green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  heading: {t
    fontSize: 20,
    padding: 8,
  },
  flatCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 10,
    padding: 8,
  },
  flatCards: {
    width: 130,
    height: 130,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatCard1: {
    backgroundColor: '#FF6D60',
    color: '#333333',
  },
  flatCard2: {
    backgroundColor: '#F7D060',
  },
  flatCard3: {
    backgroundColor: '#98D8AA',
  },
  flatCardText: {
    color: '#333333',
  },
});

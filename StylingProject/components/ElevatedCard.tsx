import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCard</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.eleVatedCard, styles.eleVatedCard1]}></View>
          <View style={[styles.eleVatedCard, styles.eleVatedCard2]}></View>
          <View style={[styles.eleVatedCard, styles.eleVatedCard3]}></View>
          <View style={[styles.eleVatedCard, styles.eleVatedCard1]}></View>
          <View style={[styles.eleVatedCard, styles.eleVatedCard2]}></View>
          <View style={[styles.eleVatedCard, styles.eleVatedCard3]}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    padding: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    gap: 10,
    // backgroundColor: 'white',
  },
  eleVatedCard: {
    width: 130,
    height: 130,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#333333',
    shadowOpacity: 0.8,
    shadowRadius:5,
    elevation: 6,
  },
  eleVatedCard1: {
    backgroundColor: '#FF6D60',
    color: '#333333',
  },
  eleVatedCard2: {
    backgroundColor: '#F7D060',
  },
  eleVatedCard3: {
    backgroundColor: '#98D8AA',
  },
});

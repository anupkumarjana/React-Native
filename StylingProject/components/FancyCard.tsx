import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/city-palace.jpg',
          }}
          style={styles.cardImage}
        />
        <View>
          <Text
            style={[
              {color: '#333333', textAlign: 'center', paddingTop: 20},
              styles.heading,
            ]}>
            Hawa Mahal
          </Text>
          <Text style={[{color: '#333333', textAlign: 'center'}]}>
            Find yourself in Rajasthan
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    padding: 8,
  },
  card: {
    backgroundColor: 'white',
    paddingBottom: 50,
    // borderRadius: 15,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,

    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#333333',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
  },
  cardImage: {
    height: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // width:500
  },
});

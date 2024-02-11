import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}></Text>
        </View>
        <Image
          source={{
            uri: 'https://www.abhibus.com/blog/wp-content/uploads/2023/06/Top-10-Places-to-Visit-in-Jaipur-How-to-Reach-Best-Time-Tourist-Attractions.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2} style={styles.bodyText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aut
            vel ab autem voluptas, doloremque iste tenetur atque laborum
            mollitia voluptatem illo itaque nemo consequatur, perspiciatis
            dolore facilis earum pariatur.
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => openWebsite('https://dietgo.in')}>
            <Text style={[styles.bodyText, styles.button]}>
              Read more..
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://anupz.dev')}>
            <Text style={[styles.bodyText, styles.button]}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  heading: {
    fontSize: 20,
  },
  card: {
    // height: 400,
    // width: 340,
    borderRadius: 15,
    // marginHorizontal: 50,
    marginVertical: 20,
    padding: 8,
    backgroundColor: '#FEFBF6',
  },
  elevatedCard: {
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#333333',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
  },
  bodyText: {color: '#333333', padding: 8},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 240,
  },
  bodyContainer: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#ECB159',
    color: 'white',
    borderRadius:5
  },
});

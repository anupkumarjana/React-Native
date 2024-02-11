import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'Anup K Jana',
      status: 'Learning react-native',
      photoUrl: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 2,
      name: 'Swarup K Jana',
      status: 'Teaching Physiology',
      photoUrl: 'https://picsum.photos/id/2/200/300',
    },
    {
      id: 3,
      name: 'Arpita Biswas',
      status: 'Building DietGo',
      photoUrl: 'https://picsum.photos/id/3/200/300',
    },
    {
      id: 4,
      name: 'Rishita Das',
      status: 'Looking into my fish tank',
      photoUrl: 'https://picsum.photos/id/4/200/300',
    },
    {
      id: 5,
      name: 'Subhashis Pal',
      status: 'Life is madarchod',
      photoUrl: 'https://picsum.photos/id/5/200/300',
    },
    {
      id: 6,
      name: 'Bakul Sarkar',
      status: 'Finding Opportunities',
      photoUrl: 'https://picsum.photos/id/6/200/300',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact List</Text>
      <ScrollView>
        <View style={styles.contactContainer}>
          {contacts.map(contact => (
            <View style={styles.contactCard} key={contact.id}>
              <Image
                style={styles.contactImage}
                source={{uri: contact.photoUrl}}
              />
              <View>
                <Text style={{fontSize: 20, color: '#FFF'}}>
                  {contact.name}
                </Text>
                <Text style={{fontSize: 15}}>{contact.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  heading: {
    fontSize: 20,
  },
  contactContainer: {
    // backgroundColor: '#000',
    // padding: 10,
  },
  contactCard: {
    backgroundColor: '#8D3DAF',
    marginVertical: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'green'
        // padding: 10,
    // borderColor:"green"
  },
  contactText: {
    justifyContent: 'center',
  },
});

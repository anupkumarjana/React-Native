import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatCard />
          <ElevatedCard />
          <FancyCard />
          <ActionCard />
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    // fontFamily: 'serif',
  },
});

export default App;

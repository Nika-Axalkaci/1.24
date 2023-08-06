import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: '#FFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;

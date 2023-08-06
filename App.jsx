import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Post from './components/Post';
import image from'./assets/khinkali.jpg'
import image2 from'./assets/khazbegi.jpg'
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Post
          image={image}
          caption="Georgian Food"
        />
        <Post
          image={image2}
          caption="Georgian Nature"
        />
        {/* Add more posts as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});

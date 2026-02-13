import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Principal({ navigation }) {
  const image = require('../../assets/cloud.jpg');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log("Erro ao carregar:", error);
    }
  };

  loadTasks();
}, []);

  return (
    
  <View style={styles.container}>
  
  <ImageBackground source={image} style={styles.image}>
    <Header navigation={navigation} />
      
    <ScrollView contentContainerStyle={styles.content}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.text}>Home</Text>}
        renderItem={({ item }) => (
   
      <NewsItem
        onPress={() =>
        navigation.navigate('NewsDetail', {
          id: item.id,
          title: item.title,
          image: item.imageNot,
          content: item.description,
          text: item.fullText,
          
        })
      }
        image={item.imageNot}
        title={item.title}
        text={item.description}
      />
  )}
/>
  </ScrollView>
  </ImageBackground>
  </View>
    
  );
}

function NewsItem({ image, title, text, onPress }) {
  return (
    
     <TouchableOpacity style={styles.newsItem}  onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles.newsImage} />}
      <Text style={styles.newsTitle}>{title}</Text>
      <Text style={styles.newsContent}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 15
  },
  newsItem: {
    marginBottom: 15,
    backgroundColor: '#ffffffad',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center',
  },
  newsImage: {
    width: '100%',
    height: 150,
  },
  newsTitle: {
    padding: 8,
    fontSize: 17,
    fontWeight: 'bold',
    shadowColor: '#9b7c3a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginHorizontal: 7
  },
  newsContent:{
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  image:{
    height: '100%',
    width: '100%',
    flex: 1, 
    justifyContent: 'center', 
    resizeMode: 'cover',
},
text: {
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
    color: '#fff',
    fontFamily: 'Poppins_400Regular'
    
  }
});

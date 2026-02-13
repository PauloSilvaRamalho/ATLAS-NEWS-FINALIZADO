import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/header';
import { useRoute } from '@react-navigation/native';

export default function NewsDetail({ navigation, route }) {
  const image = require('../../assets/cloud.jpg');
  const [tasks, setTasks] = useState([]);
  const { id } = route.params;

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

  const selectedTask = tasks.find(
    task => task.id.toString() === id.toString()
  );

  if (!selectedTask) {
    return (
      <View style={styles.container}>
         
        <Header navigation={navigation} />
        <Text style={{ padding: 20 }}>Carregando...</Text>
        
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      
      <NewsItem
        image={selectedTask.imageNot}
        title={selectedTask.title}
        text={selectedTask.fullText}
      />
      </ScrollView>
      </ImageBackground>
    
    </View>
  );
}

function NewsItem({ image, title, text }) {
  return (
    
     <View style={styles.newsItem}>
      {image && <Image source={{ uri: image }} style={styles.newsImage} />}
      <Text style={styles.newsTitle}>{title}</Text>
      <Text style={styles.newsContent}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#9e6b6b00',
  },
  content: {
    paddingTop: 70,
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
}
});


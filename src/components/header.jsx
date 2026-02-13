import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Pressable, ImageBackground } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { BlurView } from 'expo-blur';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  const [postarAberto, setPostarAberto] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageNot, setImage] = useState('');
  const [fullText, setFullText] = useState('');
  const [tasks, setTasks] = useState([]);

  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_700Bold,});

  const handleAdd = async () => {
  try {
    if (!title.trim()) {
      alert("Digite um título");
      return;
    }

    
    const newTask = {
      id: Date.now(),
      title,
      description,
      imageNot,
      fullText,
      done: false,
    };


      const stored = await AsyncStorage.getItem('@tasks');
      const oldTasks = stored ? JSON.parse(stored) : [];
      
      const updated = [...tasks, newTask];
      await AsyncStorage.setItem('@tasks', JSON.stringify(updated));

      setTasks(updated);
      setPostarAberto(false);

  }catch (error) {
      console.log("Erro:", error);
    }
  };
  
  useEffect(() => {
  async function loadTasks() {
    try {
      const stored = await AsyncStorage.getItem('@tasks');
      if (stored) {
        setTasks(JSON.parse(stored));
      }
    } catch (error) {
      console.log("Erro ao carregar:", error);
    }
  }

  loadTasks();
}, []);

  return (
    <View style={styles.container}>
   
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Atlas News <Ionicons name="compass" size={16} color="#9b7c3a"/></Text>

        <TouchableOpacity onPress={() => setPerfilAberto(true)}>
          <Ionicons name="person-circle-outline" size={45} color="#fff" />
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.sidebar}>
          <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}/>
          <MenuItem icon="home" text="Home" onPress={() => navigation.navigate("Principal")} />
          <MenuItem icon="football" text="Esporte" onPress={() => navigation.navigate("Esporte")} />
          <MenuItem icon="globe" text="Mundo" onPress={() => navigation.navigate("Mundo")} />
          <MenuItem icon="code-slash" text="Tecnologia" onPress={() => navigation.navigate("Tecnologia")} />
          <MenuItem icon="add-circle-sharp" text="Postar Notícia" onPress={() => setPostarAberto(true)} />
        </View>
      )}

      <Modal transparent visible={perfilAberto} animationType="fade">
        <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} animationType="fade"/>
        <View style={styles.modalFundo}>
          <View style={styles.perfilConteudo}>
            <Pressable style={styles.fechar} onPress={() => setPerfilAberto(false)}>
              <EvilIcons name="close" size={24} color="#fff" />
            </Pressable>

            <Text style={styles.loginTitulo}>Login</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput 
              placeholder="exemplo@email.com" 
              placeholderTextColor="#ccc" 
              style={styles.input} 
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
              placeholder="Digite sua senha" 
              secureTextEntry 
              placeholderTextColor="#ccc" 
              style={styles.input} 
            />

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


       {/* TELA DE POSTAGEM */}
      <Modal transparent visible={postarAberto} animationType="fade">
        <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} animationType="fade"/>
        <View style={styles.modalFundo}>
          <View style={[styles.perfilConteudo]}>
            <Pressable style={styles.fechar} onPress={() => setPostarAberto(false)}>
              <EvilIcons name="close" size={24} color="black"/>
            </Pressable>
            
            <Text style={[styles.loginTitulo]}>Criar Notícia</Text>
            
            <Text style={[styles.label]}>Título</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              style={[styles.input]}
            />

            <Text style={[styles.label]}>Descrição da Notícia</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              style={[styles.input]}
            />

            <Text style={[styles.label]}>URI da imagem para manchete</Text>
            <TextInput
              placeholder="https:exemplo-jpg"
              value={imageNot}
              onChangeText={setImage}
              style={[styles.input]}
            />

            <Text style={[styles.label]}>Texto completo</Text>
            <TextInput
              value={fullText}
              onChangeText={setFullText}
              style={[styles.input]}
            />

            <TouchableOpacity style={[styles.botao]} onPress={handleAdd}>
              <Text style={styles.botaoTexto}>Postar</Text>
            </TouchableOpacity> 
          </View>
        </View>
      </Modal>

    </View>

  );
}

function MenuItem({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#fff" />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    backgroundColor: '#5a5a5a3f'
  },
  topBar: {
    height: 60,
    backgroundColor: '#11111165',
    flexDirection: 'row',
    paddingHorizontal: 16,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: ' Poppins_700Bold'
  },
  content: {
    flex: 1,
    padding: 10,
  },
  sidebar: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 200,
    height: 2000,
    backgroundColor: ' rgba(0, 0, 0, 0.432)',
    zIndex: 3,
    shadowColor: '#9b7c3a',
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0, 
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
     color: '#fff',
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilConteudo: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  fechar: {
    alignSelf: 'flex-end',
  },
  loginTitulo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat',
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 5, 
    marginBottom: 15,
    fontSize: 16,
    color: '#162938',
  },
  botao: {
    backgroundColor: '#162938',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

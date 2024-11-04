import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';

const CreateEntryScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Data atual padrão no formato YYYY-MM-DD
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    // Validação para garantir que todos os campos sejam preenchidos
    if (!title || !description || !location) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    try {
      let imageUrl = null;

      // Se houver uma imagem, faça o upload
      if (imageUri) {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const storageRef = ref(storage, `images/${Date.now()}`); // Usar timestamp para nome único
        await uploadBytes(storageRef, blob);
        
        // Obter a URL da imagem após o upload
        imageUrl = await getDownloadURL(storageRef);
        console.log('Imagem carregada com sucesso:', imageUrl);
      }

      // Adiciona a entrada ao Firestore
      await addDoc(collection(db, 'entries'), {
        title,
        description,
        location,
        date, // Se você decidir usar a data, agora ela será salva
        imageUrl, // URL da imagem, que pode ser nulo se nenhuma imagem foi selecionada
        createdAt: new Date(),
      });

      // Limpa os campos após a criação
      setTitle('');
      setDescription('');
      setLocation('');
      setDate(new Date().toISOString().split('T')[0]); // Reseta a data para a atual
      setImageUri(null);
      Alert.alert('Entrada criada com sucesso!');
      navigation.navigate('Home'); 
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
      Alert.alert('Erro ao criar entrada. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Nova Entrada</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Localização"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Selecionar Imagem" onPress={handleImagePicker} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Criar Entrada" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});

export default CreateEntryScreen;


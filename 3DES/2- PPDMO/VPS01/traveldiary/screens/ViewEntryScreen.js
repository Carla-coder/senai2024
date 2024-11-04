
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, TextInput } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ViewEntryScreen = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const entriesCollection = collection(db, 'entries');
      const entrySnapshot = await getDocs(entriesCollection);
      const entryList = entrySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(entryList); // Para verificar o que está sendo retornado
      setEntries(entryList);
    } catch (error) {
      console.error("Erro ao buscar entradas: ", error);
      setError("Erro ao carregar entradas.");
    }
  };
  const createEntry = async () => {
    try {
      const docRef = await addDoc(collection(db, 'entries'), {
        title,
        description,
        date: new Date().toISOString(),
        location,
        imageUrl: 'villa',
      });
      console.log("Entrada criada com ID: ", docRef.id);
      fetchEntries(); 
    } catch (error) {
      console.error("Erro ao criar entrada: ", error);
      setError("Erro ao criar entrada.");
    }
  };

  const renderImage = (item) => {
    if (!item.imageUrl) {
      return null; // Não renderiza nada se não houver URL da imagem
    }

    let uri;
    if (item.imageUrl === 'villa') {
      uri = require('../assets/images/villa.png'); // Ajuste o caminho se necessário
    } else {
      uri = { uri: item.imageUrl };
    }
  
    return <Image source={uri} style={styles.image} />;
  };
  

  // Se houver erro, renderize mensagem de erro
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Entradas</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            {item.location && <Text>Localização: {item.location}</Text>}
            {item.imageUrl && renderImage(item)} {/* Chamada da função renderImage */}
          </View>
        )}
      />
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Localização"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Criar Entrada" onPress={createEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  entry: { marginVertical: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  entryTitle: { fontWeight: 'bold', fontSize: 16 },
  image: { width: '100%', height: 150, borderRadius: 5, marginTop: 10 },
  error: { color: 'red', textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 },
});

export default ViewEntryScreen;



import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { firebase } from './firebaseConfig';

export default function ChatScreen({ route }) {
  const { name } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));
      });

    return unsubscribe;
  }, []);

  const handleSend = async () => {
    await firebase.firestore().collection('messages').add({
      text: message,
      name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.sender}>{item.name}:</Text>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        inverted
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Escreva uma mensagem"
      />
      <Button title="Enviar" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderBottomWidth: 1, padding: 10, marginBottom: 10 },
  messageContainer: { paddingVertical: 5 },
  sender: { fontWeight: 'bold' }
});

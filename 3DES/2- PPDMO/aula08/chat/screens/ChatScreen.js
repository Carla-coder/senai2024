// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

// export default function ChatScreen({ route }) {
//   const { name } = route.params;
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'messages'),
//       orderBy('createdAt', 'desc')
//     );

//     const unsubscribe = onSnapshot(messagesQuery, snapshot => {
//       setMessages(snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       })));
//     });

//     return unsubscribe;
//   }, []);

//   const handleSend = async () => {
//     await addDoc(collection(db, 'messages'), {
//       text: message,
//       name,
//       createdAt: serverTimestamp()
//     });
//     setMessage('');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//     <View style={styles.container}>
    
//         {messages.map((item) => (
//           <View key={item.id} style={styles.messageContainer}>
//             <Text style={styles.sender}>{item.name}:</Text>
//             <Text style={styles.message}>{item.text}</Text>
//           </View>
//         ))}
      
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={setMessage}
//           placeholder="Escreva uma mensagem"
//         />
//         <Button title="Enviar" onPress={handleSend} color="#35797d" />
//       </View>
//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     padding: 10, 
//     backgroundColor: '#F5F5F5' 
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   input: { 
//     flex: 1, 
//     borderBottomWidth: 1, 
//     padding: 10, 
//     borderColor: '#35797d', 
//     marginRight: 10,
//     fontSize: 16,
//   },
//   messageContainer: {
//     paddingVertical: 5,
//     backgroundColor: '#E0E0E0', 
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 5,
//     maxWidth: '80%',
//     alignSelf: 'flex-start',
//   },
//   sender: {
//     fontWeight: 'bold',
//     color: '#35797d',
//     marginBottom: 3,
//   },
//   message: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function ChatScreen({ route }) {
  const { name } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef(); // Cria uma referência para o ScrollView

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(messagesQuery, snapshot => {
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(newMessages);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Rola para o final do ScrollView sempre que a lista de mensagens mudar
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
    await addDoc(collection(db, 'messages'), {
      text: message,
      name,
      createdAt: serverTimestamp()
    });
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        ref={scrollViewRef} // Atribui a referência ao ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled" // Permite que o teclado não feche ao tocar em mensagens
      >
        {messages.map((item) => (
          <View key={item.id} style={styles.messageContainer}>
            <Text style={styles.sender}>{item.name}:</Text>
            <Text style={styles.message}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Escreva uma mensagem"
        />
        <Button title="Enviar" onPress={handleSend} color="#35797d" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#F5F5F5' 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: { 
    flex: 1, 
    borderBottomWidth: 1, 
    padding: 10, 
    borderColor: '#35797d', 
    marginRight: 10,
    fontSize: 16,
  },
  messageContainer: {
    paddingVertical: 5,
    backgroundColor: '#E0E0E0', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  sender: {
    fontWeight: 'bold',
    color: '#35797d',
    marginBottom: 3,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
});

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

// import React, { useState, useEffect, useRef } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
// import { db } from '../firebaseconfig';
// import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

// export default function ChatScreen({ route }) {
//   const { name } = route.params;
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const scrollViewRef = useRef(); // Cria uma referência para o ScrollView

//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'messages'),
//       orderBy('createdAt', 'desc')
//     );

//     const unsubscribe = onSnapshot(messagesQuery, snapshot => {
//       const newMessages = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setMessages(newMessages);
//     });

//     return unsubscribe;
//   }, []);

//   useEffect(() => {
//     // Rola para o final do ScrollView sempre que a lista de mensagens mudar
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollToEnd({ animated: true });
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     await addDoc(collection(db, 'messages'), {
//       text: message,
//       name,
//       createdAt: serverTimestamp()
//     });
//     setMessage('');
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         ref={scrollViewRef} // Atribui a referência ao ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         keyboardShouldPersistTaps="handled" // Permite que o teclado não feche ao tocar em mensagens
//       >
//         {messages.map((item) => (
//           <View key={item.id} style={styles.messageContainer}>
//             <Text style={styles.sender}>{item.name}:</Text>
//             <Text style={styles.message}>{item.text}</Text>
//           </View>
//         ))}
//       </ScrollView>
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
import { View, TextInput, Text, StyleSheet, ScrollView, Alert, TouchableOpacity} from 'react-native';
import { db } from '../firebaseconfig';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa os ícones

export default function ChatScreen({ route }) {
  const { name } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const scrollViewRef = useRef();

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
      setMessages(newMessages.slice(0, 5));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
    if (editingId) {
      await updateDoc(doc(db, 'messages', editingId), {
        text: message,
        name,
        updatedAt: serverTimestamp()
      });
      setEditingId(null);
    } else {
      await addDoc(collection(db, 'messages'), {
        text: message,
        name,
        createdAt: serverTimestamp()
      });
    }
    setMessage('');
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setMessage(currentText);
  };

  const handleDelete = async (id) => {
    console.log("Tentativa de exclusão da mensagem com ID:", id); // Confirma que o onPress está sendo acionado
    Alert.alert(
      "Excluir Mensagem",
      "Você tem certeza que deseja excluir esta mensagem?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: async () => {
            try {
              await deleteDoc(doc(db, 'messages', id));
              // setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id)); // Atualiza o estado
              console.log("Mensagem excluída com sucesso");
            } catch (error) {
              console.error("Erro ao excluir a mensagem:", error);
            }
          } 
        },
      ]
    );
  };
  

  return (
    <View style={styles.container}>
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {messages.reverse().map((item) => (
          <View key={item.id} style={styles.messageContainer}>
            <Text style={styles.sender}>{item.name}:</Text>
            <Text style={styles.message}>{item.text}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleEdit(item.id, item.text)}>
                <Icon name="pencil" size={20} color="#35797d" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
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
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.buttonText}>{editingId ? "Atualizar" : "Enviar"}</Text>
        </TouchableOpacity>
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
  sendButton: {
    backgroundColor: '#35797d',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});



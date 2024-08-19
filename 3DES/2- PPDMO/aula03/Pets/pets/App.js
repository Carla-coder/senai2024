import React, { useState } from "react";
import {
  styleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { db } from "./firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function App() {
  const [nomePet, setNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [pets, setPets] = useState("");
  const [loading, setLoading] = useState(false);

  const adicionarPet = async () => {
    try {
      setLoading(true);
      await addDoc(collection(db, "pets"), {
        nome: nomePet,
        tipo: tipoPet,
      });
      alert("Pet adicionado com sucesso!");
      setNomePet("");
      setTipoPet("");
      fechtPets();
    } catch (e) {
      console.error("Erro ao adicionar Pet", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchPets = async () => {
    try {
      const querySnapshot = await getDocs(collection (db, "pets"));
      const petlist = querySnapshot.docs.map(doc => doc.data());
      setPets(petlist);
    } catch  (e) {
        console.error("Erro ao buscar Pets", e);
    }
   };

  return (
    <View style = {styleSheet.container}>
      <Text style = {styleSheet.title}>Pets Senai</Text>
      <Text style = {styleSheet.label}>Nome do Pet </Text>
      <TextInput
      style={styleSheet.input}  
      placeholder="Digite o nome do pet"
  )


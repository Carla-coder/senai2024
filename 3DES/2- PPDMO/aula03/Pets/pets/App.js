import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "./firebaseconfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { launchImageLibrary } from "react-native-image-picker";

const storage = getStorage();

// Função para formatar a idade corretamente
const formatAge = (idade) => {
  const anos = parseInt(idade.anos, 10);
  const meses = parseInt(idade.meses, 10);

  let idadeFormatada = "";

  if (!isNaN(anos) && anos > 0) {
    idadeFormatada += `${anos} ${anos === 1 ? "ano" : "anos"}`;
  }

  if (!isNaN(meses) && meses > 0) {
    if (idadeFormatada) idadeFormatada += " e ";
    idadeFormatada += `${meses} ${meses === 1 ? "mês" : "meses"}`;
  }

  return idadeFormatada || "Idade não especificada";
};

export default function App() {
  const [nomePet, setNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingPetId, setEditingPetId] = useState(null);
  const [idadePet, setIdadePet] = useState("");
  const [anosPet, setAnosPet] = useState("");
  const [mesesPet, setMesesPet] = useState("");

  useEffect(() => {
    fetchPets();
  }, []);
  

  const adicionarPet = async () => {
    try {
      setLoading(true);
      let imageUrl = null;
      if (petImage) {
        const storageRef = ref(storage, `pets/${Date.now()}-${nomePet}.jpg`);
        const response = await fetch(petImage);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        imageUrl = await getDownloadURL(storageRef);
      }
  
      // Formatar a idade do pet para salvar
      const idadePet = {
        anos: anosPet ? parseInt(anosPet, 10) : 0,
        meses: mesesPet ? parseInt(mesesPet, 10) : 0,
      };
  
      if (editingPetId) {
        const petDoc = doc(db, "pets", editingPetId);
        await updateDoc(petDoc, {
          nome: nomePet,
          tipo: tipoPet,
          idade: idadePet,
          imagem: imageUrl || petImage,
        });
        Alert.alert("Pet atualizado com sucesso!");
      } else {
        await addDoc(collection(db, "pets"), {
          nome: nomePet,
          tipo: tipoPet,
          idade: idadePet,
          imagem: imageUrl,
        });
        Alert.alert("Pet adicionado com sucesso!");
      }
      resetForm();
      fetchPets();
    } catch (e) {
      console.error("Erro ao adicionar/atualizar pet", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchPets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "pets"));
      const petsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPets(petsList);
    } catch (e) {
      console.error("Erro ao buscar pets", e);
    }
  };

  const escolherImagem = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("Seleção de imagem cancelada");
      } else if (response.error) {
        console.log("Erro ao selecionar imagem: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setPetImage(source.uri);
      }
    });
  };

  const editarPet = (pet) => {
    setNomePet(pet.nome);
    setTipoPet(pet.tipo);
    setPetImage(pet.imagem);
    setEditingPetId(pet.id);
  
    // Se o pet tiver idade, descompacte a idade para os campos de edição
    if (pet.idade) {
      setAnosPet(pet.idade.anos ? pet.idade.anos.toString() : "");
      setMesesPet(pet.idade.meses ? pet.idade.meses.toString() : "");
    } else {
      setAnosPet("");
      setMesesPet("");
    }
  };

  const excluirPet = async (petId) => {
    try {
      const petDoc = doc(db, "pets", petId);
      await deleteDoc(petDoc);
      Alert.alert("Pet excluído com sucesso!");
      fetchPets();
    } catch (e) {
      console.error("Erro ao excluir pet", e);
    }
  };

  const resetForm = () => {
    setNomePet("");
    setTipoPet("");
    setAnosPet(""); 
    setMesesPet("");
    setPetImage(null);
    setEditingPetId(null);
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>PetShop SENAI</Text>
        <Text style={styles.label}>Nome do Pet:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do pet"
          placeholderTextColor="#aaa"
          value={nomePet}
          onChangeText={setNomePet}
        />
        <Text style={styles.label}>Tipo do Pet:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a espécie do pet"
          placeholderTextColor="#aaa"
          value={tipoPet}
          onChangeText={setTipoPet}
        />
        <Text style={styles.label}>Idade do Pet:</Text>
        <View style={styles.ageContainer}>
          <TextInput
            style={styles.ageInput}
            placeholder="Anos"
            placeholderTextColor="#aaa"
            value={anosPet}
            onChangeText={(text) => setAnosPet(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.ageInput}
            placeholder="Meses"
            placeholderTextColor="#aaa"
            value={mesesPet}
            onChangeText={(text) => setMesesPet(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity onPress={escolherImagem} style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>
            {petImage ? "Imagem Selecionada" : "Selecionar Imagem do Pet"}
          </Text>
        </TouchableOpacity>
        {petImage && (
          <Image source={{ uri: petImage }} style={styles.petImagePreview} />
        )}
        <TouchableOpacity
          onPress={adicionarPet}
          style={styles.addButton}
          disabled={loading}
        >
          <Text style={styles.addButtonText}>
            {loading
              ? "Salvando..."
              : editingPetId
              ? "Atualizar Pet"
              : "Adicionar Pet"}
          </Text>
        </TouchableOpacity>

        <FlatList
          data={pets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.petItem}>
              <Image
                source={{
                  uri: item.imagem || "https://via.placeholder.com/100",
                }}
                style={styles.petImage}
              />
              <View style={styles.petInfo}>
                <Text style={styles.petName}>{item.nome}</Text>
                <Text style={styles.petType}>{item.tipo}</Text>
                <Text style={styles.petAge}>
                  Idade: {formatAge(item.idade)}
                </Text>
              </View>
              <View style={styles.petActions}>
                <TouchableOpacity
                  onPress={() => editarPet(item)}
                  style={styles.editButton}
                >
                  <Icon name="pencil" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => excluirPet(item.id)}
                  style={styles.deleteButton}
                >
                  <Icon name="trash" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          style={styles.petList}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#20B2AA",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#20B2AA",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  imagePicker: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  petImagePreview: {
    width: 100,
    height: 100,
    marginBottom: 15,
    alignSelf: "center",
  },
  addButton: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  petList: {
    flex: 1,
  },
  petItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20B2AA",
  },
  petType: {
    fontSize: 16,
    color: "#666",
  },
  petAge: {
    fontSize: 16,
    color: "#20B2AA",
  },
  petActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  ageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  ageInput: {
    flex: 1,
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  editButton: {
    backgroundColor: "#20B2AA",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#6B8E8D",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

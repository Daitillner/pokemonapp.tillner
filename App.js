import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Modal, Text } from 'react-native';

import logo from "./assets/logo.png";

export default function App () {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelect, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeText = (text) => {
    setTextItem(text);
    console.log(text);
  };

  const addItem = () => {
    setList(prevstate => [
      ...prevstate,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = (id) => {
    console.log("delete item");
    setList(prevstate => prevstate.filter(element => element.id !== id));
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyles}>
      <Text>{item.name}</Text>
      <Button
        title='Edit'
        onPress={() => console.log("Aqui se abrira un modal")}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Shopping List</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="elemento de la lista"
            style={styles.input}
            onChangeText={onHandleChangeText}
            value={textItem}
          />
          <Button title="Presiona aqui" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.modalContainer}>
        <Modal visible={modalVisible} animationType="fade" transparent={false}>
          <View style={styles.modalContainer}>
            <Text>El Modal</Text>
            <View>
              <Text>Estas seguro que deseas borrar este elemento?</Text>
              <Text>{itemSelect.name}</Text>
            </View>
            <View>
              <Button
                title="Eliminar"
                color={"red"}
                onPress={() => onHandleDelete(itemSelect.id)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#E7EAF2",
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
   
  },
});
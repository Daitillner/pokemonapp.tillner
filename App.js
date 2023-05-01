import { StyleSheet, View, TextInput } from 'react-native';
import { Button, FlatList, Modal } from 'react-native';
import { Image, Text } from 'react-native';
import { useState } from 'react';

import logo from "./assets/logo.png";

export default function App () {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState({});
  const [itemSelect,setItemSelected] = useState({});
  const [modalVisible,setModalVisible] = useState(false);
};

function onHandleChangeText(text) {
  setTextItem(text);
  console.log(text);
  
};

const addItem = () => {
  setList(prevstate => [
  ...prevstate,
  {name: textItem,id: Math.random().toString()},
]);
  setTextItem(""); 
}; 

const onHandleModal = item =>{
  setItemSelected("item")
  setModalVisible(true)
};

const onHandleDelete = id => {
  console.log("delete item")
  setList(prevstate => prevstate.filter(element => element !== id));
  setModalVisible(!modalVisible);
};

const renderItem = ({item}) => (
  <View style={styles.renderItemStyle}>
    <Text>{item.name}</Text>
    <Button 
        title='Edit'
        onPress={() => console.console.log("Aqui se abrira un modal")}
    />
  </View>
);

const list = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const Item = ({ title }) => (
  <Text>{title}</Text>
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
        <Button title="Presiona aqui" onPress={(addItem) => console.log("presiona aqui")} />
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
          onPress={() => onHandleDelete(itemSelected)}
        />
      </View>
      </View>
    </Modal>
  </View>
  </View>
); 
const styles = StyleSheet.create = ({
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
  color: "#1E283C"

},
addItemContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

},
input: {
  borderBottomColor: "black",
  borderBottomWidth: 2,
  width: 200,

},
listContainer: {
  flex: 2,
  marginHorizontal: 30,
  marginTop: 20,
  padding: 3,

},
renderItemStyles: {
  height: 60,
  flexDirection: "row",
  marginBottom: 25,
  backgroundColor: "white",
  borderRadius: 10,
  padding: 10,
  justifyContent: "space-around",
  alignItems: "center",
  shadowColor: "black",
  shadowOpacity: 0.3,
  shadowOffset: { width: 3, height: 1},
  shadowRadius: 2,
  elevation: 3,

},
modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",

},
}); 







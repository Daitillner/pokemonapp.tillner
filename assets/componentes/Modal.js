import {Buttom, StyleSheet, Text, View, Modal as newModal } from "react-native"

import React from "react"

const Modal  = ({Visible, }) => {
    return (
        <View>
           <View style={StyleS.modalContainer}>
              <newModal animatioType= 'fade' trasnparent={false} visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <Text>Modal</Text>
                    <View>
                        <Text>Estas seguro que deseas borrar este alemento</Text>
                        <Text>{itemSelect.name}</Text>
                    </View>
                    <View>
                        <Buttom
                           title='Eliminar'
                           color={"red"}
                           //onPress={onHandleDelete(itemSelected)}
                           onPress={() => onHandleDelete(itemSelected)}
                           />
                    </View>
                </View>
            </newModal>
        </View>
    </View>

    )
}

export default Modal

const styles = StyleSheet.create({})

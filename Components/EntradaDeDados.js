import React, {useState} from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const EntradaDeDados = (props) => {
    return (
        <View style={styles.primeiraLinha}>
            <TextInput style={styles.entrada} placeholder='Item ou descrição do item' onChangeText={props.setItem} value={props.item}></TextInput>
            <TextInput style={styles.entrada} placeholder='Fabricante' onChangeText={props.setFabricante} value={props.fabricante}></TextInput>
            <View>
                <Button title='Cadastrar' onPress={() => props.exibeItem(props.item, props.fabricante)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 40,
      flexDirection: 'column'
    },
    entrada: {
      marginBottom: 12
    },
    primeiraLinha: {
        justifyContent: 'center'
    },
  });

export default EntradaDeDados

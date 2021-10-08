import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Cartao from './Cartao'

const ExibeItens = (props) => {
    return (
        <View>
            <FlatList
                data={props.lista}
                renderItem={
                lista => 
                <View style={styles.valor}>
                    <Cartao style={styles.cartao}>
                        <Text> Item: {lista.item.item}</Text>
                        <Text> Fabricante: {lista.item.fabricante}</Text>
                    </Cartao>
                </View>}
          />
            
        </View>
    )
}

const styles = StyleSheet.create({
    valor: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cartao: {
        marginBottom: 4
    }
})

export default ExibeItens

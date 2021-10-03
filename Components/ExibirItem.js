import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Cartao from './Cartao'

const ExibirItem = (props) => {
    console.log(JSON.stringify(props.lista))
    return (
        <View style={styles.valor}>
            <Cartao style={styles.cartao}>
                <Text> Item: {props.lista[0].item}</Text>
                <Text> Fabricante: {props.lista[0].fabricante}</Text>
            </Cartao>
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

export default ExibirItem

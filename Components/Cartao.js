import React from 'react'
import { StyleSheet, View } from 'react-native'

const Cartao = (props) => {
    return (
        <View style={{...styles.cartao, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: 'white',
        elevation: 4,
        padding: 12,
        borderRadius: 12
    }
})

export default Cartao
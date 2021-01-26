import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: 'Shopping List'
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#000'
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center' 
    }
})

import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'



const AddItem = ({addItem}) => {
    const [text, setText] = useState('')

    const handleChange = (text) => {
        setText(text)     
    } 
    
    
    //onPress={() => addItem(text)}
    return (
        <View>
            <TextInput placeholder="Add Item..."
                        style={styles.input}
                        onChangeText={handleChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}><FontAwesome name="plus" size={20} color="black"/> Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 15,
        fontSize: 16
    },
    btn: {
        backgroundColor: 'lightgrey',
        padding: 9,
        margin: 5
    },
    btnText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20
    }
})

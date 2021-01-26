import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './screens/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'react-native-uuid';


export default function App() {
  const [items, setItems] = useState([
    {id: uuid.v4(), text:'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
  ])

  const deleteItem = (id) => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id != id)
    })
  }

  const addItem = (text, setText) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'OK'}])
    }else{
      setItems(previousItems => {
        return [{id: uuid.v1(), text}, ...previousItems]
      })
    }
   
  }

  return (
    <View style={styles.container}>
    <Header/>
    <AddItem addItem={addItem} />
    <FlatList
      data={items}
      renderItem={({item}) => 
        <ListItem item={item} deleteItem={deleteItem} />}  
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

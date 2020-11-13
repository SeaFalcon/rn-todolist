import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
    marginRight: 10,
  },
  button: {
    paddingTop: 10,
    marginRight: 10,
  },
});

export default function TodoInsert({ onAddTodo, onRemoveTodoAll }) {
  const [newTodoItem, setNewTodoItem] = useState('');

  function handlePressAdd() {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  }

  function handleChangeText(todoItem) {
    setNewTodoItem(todoItem);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
        value={newTodoItem}
        onChangeText={handleChangeText}
      />
      <View style={styles.button}>
        {/* <Button title={'ADD'} onPress={handlePress} /> */}
        <TouchableOpacity onPress={handlePressAdd}>
          <Text style={{ color: '#007AFF', fontSize: 20 }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        {/* <Button title={'REMOVEALL'} color='red' onPress={handlePress} buttonStyle={{ fontSize: 1 }} /> */}
        <TouchableOpacity onPress={onRemoveTodoAll}>
          <Text style={{ color: 'red', fontSize: 20 }}>RemoveAll</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
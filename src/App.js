import React from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View
} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist !</Text>
      <View style={styles.card}>
        {/* <TextInput style={styles.input} placeholder='Add an item!' /> */}
        <TodoInsert />
        {/* <ScrollView>
          <Text>TodoList</Text>
        </ScrollView> */}
        <TodoList />
      </View>
    </SafeAreaView >
  );
}
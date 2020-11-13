import React, { useEffect, useState } from 'react';
import {
  Alert,
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
    flex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  const [todos, setTodos] = useState([]);
  const [itemKey, setItemKey] = useState(1);

  function addTodo(text) {
    if (!text) return Alert.alert('할 일을 입력해주세요!');
    setTodos([
      ...todos,
      { id: itemKey, textValue: text, checked: false }
    ]);

    setItemKey(itemKey + 1);
  }

  const removeTodo = itemId => e => {
    Alert.alert(
      '삭제 확인',
      '정말 삭제하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => setTodos(todos.filter(todo => todo.id !== itemId))
        }
      ],
      { cancelable: false }
    );
  }

  const toggleTodo = itemId => e => {
    setTodos(todos.map(todo =>
      todo.id === itemId ? { ...todo, checked: !todo.checked } : todo
    ));
  }

  const removeTodoAll = () => {
    if(!todos.length) return Alert.alert('삭제 할 항목이 없습니다.');
    Alert.alert(
      '전체삭제',
      '정말 전체삭제 하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => setTodos([])
        }
      ],
      { cancelable: false }
    )
  }

  useEffect(() => {
    // console.log(todos, itemKey);
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist !</Text>
      <View style={styles.card}>
        {/* <TextInput style={styles.input} placeholder='Add an item!' /> */}
        <TodoInsert
          onAddTodo={addTodo}
          onRemoveTodoAll={removeTodoAll}
        />
        {/* <ScrollView>
          <Text>TodoList</Text>
        </ScrollView> */}
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onToggleTodo={toggleTodo}
        />
      </View>
    </SafeAreaView >
  );
}
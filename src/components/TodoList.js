import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TodoListItem from './TodoListItem';

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  }
})

export default function TodoList({ todos, onRemoveTodo, onToggleTodo }) {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          item={todo}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ScrollView>
  )
}
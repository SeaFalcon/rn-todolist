import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TodoListItem from './TodoListItem';

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  }
})

export default function TodoList() {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TodoListItem />
    </ScrollView>
  )
}
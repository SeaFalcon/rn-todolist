import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  }
});

export default function TodoListItem({ item: { id, textValue, checked }, onRemoveTodo, onToggleTodo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggleTodo(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="downcircleo" size={30} color="#3143e8" />
          </View>
        ) : (
            <View style={styles.circle}></View>
          )}
      </TouchableOpacity>
      <Text
        style={
          [styles.text, checked ? styles.strikeText : styles.unstrikeText]
        }>
        {textValue}
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onRemoveTodo(id)}
      >
        <View style={styles.completeCircle}>
          <Icon name='delete' size={30} color='#e33057' />
        </View>
      </TouchableOpacity>
    </View>
  )
}
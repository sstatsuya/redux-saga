import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {todoSlice} from './todoSlice';

export default TodoList = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const {todoList, isLoading, isError} = todoReducer;
  const dispatch = useDispatch();
  const renderTodoList = () => {
    if (!isLoading && isError) {
      return <Text style={{marginTop: 24}}>{'Đã có lỗi xảy ra'}</Text>;
    }
    if (!isLoading && todoList && todoList.length > 0)
      return (
        <ScrollView style={{marginTop: 24}}>
          <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
            {todoList.slice(0, 50).map((item, index) => {
              return renderTodoItem(item, index);
            })}
          </View>
        </ScrollView>
      );
  };

  const onRefetchTodoList = () => {
    dispatch(todoSlice.actions.getTodoListRequest());
  };

  const renderTodoItem = (item, index) => {
    return (
      <View
        key={index}
        style={{
          width: 100,
          height: 100,
          padding: 4,
          borderRadius: 4,
          backgroundColor: 'rgba(0,0,0,0.15)',
          margin: 8,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 4,
              height: 4,
              borderRadius: 10,
              backgroundColor: !item.completed ? '#ff7c17' : '#2ba307',
            }}
          />
          <Text
            style={{
              marginLeft: 4,
              color: !item.completed ? '#ff7c17' : '#2ba307',
            }}>
            {!item.completed ? 'Not done' : 'Done'}
          </Text>
        </View>

        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}> */}
          <Text style={{color: 'rgba(0,0,0,0.7)'}}>Task: </Text>
          <Text ellipsizeMode='tail' numberOfLines={2} style={{color: 'black', fontWeight: 'bold'}}>{item.title}</Text>
        {/* </View> */}
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          flex: 1,
          paddingVertical: 24,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
          Todos
        </Text>
        <TouchableOpacity
          onPress={() => {
            onRefetchTodoList();
          }}
          style={{
            marginTop: 24,
            fontSize: 18,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 4,
            backgroundColor: 'orange',
          }}>
          <Text style={{color: 'white'}}>Refetch list</Text>
        </TouchableOpacity>
        {renderTodoList()}
      </View>
    </>
  );
};

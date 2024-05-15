import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Todolist from './feature/todolist';
import User from './feature/user';
import {useSelector} from 'react-redux';

export default Home = () => {
  const isLoadingTodo = useSelector(state => state.todoReducer.isLoading);
  const isLoadingUser = useSelector(state => state.userReducer.isLoading);
  const isLoading = isLoadingTodo || isLoadingUser;
  const renderLoading = () => {
    if (isLoading)
      return (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <ActivityIndicator size={'large'} color={'orange'} />
        </View>
      );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Todolist />
      <User />
      {renderLoading()}
    </View>
  );
};

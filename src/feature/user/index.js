import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from './userSlice';

export default UserList = () => {
  const userReducer = useSelector(state => state.userReducer);
  const {userList, isLoading, isError} = userReducer;
  const dispatch = useDispatch();
  const renderUserList = () => {
    if (!isLoading && isError) {
      return <Text style={{marginTop: 24}}>{'Đã có lỗi xảy ra'}</Text>;
    }
    if (!isLoading && userList && userList.length > 0)
      return (
        <ScrollView>
          <View style={{flex: 1, alignItems: 'center'}}>
            {userList.slice(0, 10).map((item, index) => {
              return <Text key={index}>{item.name}</Text>;
            })}
          </View>
        </ScrollView>
      );
  };

  const onRefetchUserList = () => {
    dispatch(userSlice.actions.getUserListRequest());
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
          Users
        </Text>
        <TouchableOpacity
          onPress={() => {
            onRefetchUserList();
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
        {renderUserList()}
      </View>
    </>
  );
};
